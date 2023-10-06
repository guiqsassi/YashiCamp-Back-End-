import express from "express";
import router from "./routes/router.js";
import * as dotenv from 'dotenv'
import cors from "cors";
dotenv.config({path: './config/config.env'})


const app = express()
app.use(cors())
const PORT = process.env.PORT

app.use(express.urlencoded({extended:true}))
app.use(router)

app.get("/", (req, res) =>{
    res.send("Bom dia")
})

try {
    app.listen(PORT? PORT: 8000)
    console.log("server rodando na porta: " + PORT);
} catch (error) {
    console.log(error);
}

