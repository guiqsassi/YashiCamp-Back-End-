import jwt from "jsonwebtoken"

import dotenv from "dotenv"
dotenv.config({path: "./config/config.env"})

const jwtAuth = (req, res, next)=>{
    const token = req.headers["auth"]
    token?
    jwt.verify(token, process.env.TOKEN, (err, decoded)=>{
        if(err) 
        res.status(500).json({auth:false, message:"token não é válido"})
        else{
            next()
        }
    })
    :
    res.status(401).json({auth: false, message:"token não existente"})
}

export default jwtAuth