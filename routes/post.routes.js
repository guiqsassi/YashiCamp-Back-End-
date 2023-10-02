import express from "express";
import jwtAuth from "../config/verifyToken.js";
import {Review} from "../models/Review.js";

const post = express.Router()

    post.post("/newPost",jwtAuth ,(req,res)=>{
        const {tittle, text, user_id} = req.body
        if(tittle && text){
            Review.create({tittle, text, user_id}).then(()=>{ 
                res.json({message: "Review criado com sucesso"})
                .status(200)})
                .catch((err)=>{ res.send(err)})
        }
        else
        {
        res.json({message: "faltou algo né meu chapeiro"})
        res.status(422)
        }
    })

    export default post