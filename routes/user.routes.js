import express from "express";
import {User} from "../models/user.js";
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

    const userAlreadyExists = await User.findOne({where: {email}}).catch((err)=>{res.send(err)})    

    if(userAlreadyExists){
    const logged = await bcrypt.compare(password, userAlreadyExists.password).catch((err)=>{res.send(err)})    

    const token = jwt.sign({
        userId: userAlreadyExists.id
    }, process.env.TOKEN, {expiresIn: "10h"})



    res.json(token)
}
    else{
        res.send("usuário não registrado")
    }
})

user.get("/GetUser", jwtAuth ,async(req,res)=>{
    const id = parseInt(req.body.id)
    const userSearch = await User.findByPk(id).catch((err)=>{ res.json({err: err, message: "deu errado"}).status(401)})
    if(userSearch){res.json(userSearch) }
})

user.delete("/delete", jwtAuth ,async(req, res)=>{
    const id = req.body

    const userExists = await User.findOne({
        where:id
    })

    userExists?

    await User.destroy({
        where: id
    }).then(()=>{ 
        res.send("Deletado com sucesso")
    }).catch((err)=>{
res.send("deu ruim")
    }) 
:
res.send("Não foi possivel encontrar um user com este Id")
})

user.put("/update", jwtAuth, async(req,res)=>{
    let   {id, email, password, username} = req.body
    if(id !== undefined){
        const userExists = await User.findOne({
            where: {id}
        })
    
        if(email == undefined){
            email = userExists.email}
        if(username == undefined){
            username = userExists.username}
        if(password == undefined){
            password = userExists.password}
        
            await bcrypt.genSalt(10,(err , salt)=>{
                bcrypt.hash(password, salt, (err, hash)=>{
                    password = hash
                })
            })
            console.log(email, password, username);
    
        userExists?
            
        await User.update({
            username: username, email: email, password: password
        },
        {where: {id: id}}).then(()=>{ 
            res.send("update com sucesso")
        }).catch((err)=>{
            console.log(err)
            res.send(err)
        }) :
        res.send("Não foi possivel encontrar um user com este Id")
    
    }

        res.send("Id inválido")



})

export default user