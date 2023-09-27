import express from "express";
import jwtAuth from "../config/verifyToken.js";
import Post from "../models/post.js";

const post = express.Router()

    post.post("/newPost",jwtAuth ,(req,res)=>{
        const {tittle, text} = req.body
        if(tittle && text){
            Post.create({tittle, text}).then(()=>{ 
                res.json({message: "Post criado com sucesso"})
                .status(200)})
                .catch((err)=>{ res.send(err)})
        }
        else
        {
        res.json({message: "faltou algo né meu chapeiro"}).status(422)
        }
    })

    export default post