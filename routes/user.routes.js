import express from "express";
import User from "../models/user.js";
import bcrypt from "bcrypt"
import dotenv from "dotenv"
import jwt from "jsonwebtoken";
import jwtAuth from "../config/verifyToken.js";
import { where } from "sequelize";
dotenv.config({path:"./config/config.js"})

const user = express.Router()

user.post("/register", async(req,res)=>{
   let   {email, password, username} = req.body

    const userAlreadyExists = await User.findOne({where: {email}}).catch((err)=>{console.log(err);})    
    
    userAlreadyExists?


    res.send("usuário já existente"):
    await bcrypt.genSalt(10,(err , salt)=>{
        bcrypt.hash(password, salt, (err, hash)=>{
            console.log(hash)
            password = hash
            User.create({email, password, username}).then(()=>{res.send("usuario salvo")}).catch((err)=>{res.send("usuário não salvo" + err)})
        })
    })
})

user.post("/login", async(req,res)=>{
    let {email, password} = req.body

    const userAlreadyExists = await User.findOne({where: {email}}).catch((err)=>{console.log(err);})    

    const logged = await bcrypt.compare(password, userAlreadyExists.password);

    const token = jwt.sign({
        userId: userAlreadyExists.id
    }, process.env.TOKEN, {expiresIn: "10h"})



    res.json(token)
})

user.get("/GetUser", jwtAuth ,async(req,res)=>{
    const id = parseInt(req.body.id)
    const userSearch = await User.findByPk(id).catch((err)=>{ res.json({err: err, message: "deu errado"}).status(401)})
    if(userSearch){res.json(userSearch) }
})

export default user