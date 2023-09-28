import express from "express";
import { CampingZone } from "../models/campingZone.js";

const campingZone = express.Router()

    campingZone.post("/newCampingZone", (req,res)=>{
        const {name, image, longitude, latitude, user_id} = req.body

        if(name && image && longitude && latitude && user_id){
            CampingZone.create({name, image, longitude, latitude, user_id}).then(()=>{ res.json({message: "CampingZone criada com sucesso!"}).status(200) }).catch((err)=>{res.send(err).status(400)})
        }
        else{
            res.send("faltando informações")
        }
    })

    campingZone.get("/getAll", async (req,res)=>{
        
        const allCampingZones = await CampingZone.findAll({
            attributes: ["name", "image", "longitude", "latitude"]
        }).then((data)=>{ 
                    res.send(data)
        }).catch((err)=>{
            res.send("deu ruim")
        })

    })

    campingZone.delete("/delete", async(req, res)=>{
        const id = req.body

        const CampingZoneExists = await CampingZone.findOne({
            where:id
        })

        CampingZoneExists?

        await CampingZone.destroy({
            where: id
        }).then(()=>{ 
            res.send("Deletado com sucesso")
        }).catch((err)=>{
    res.send("deu ruim")
        }) 
    :
    res.send("Não foi possivel encontrar um campingZone com este Id")
    })
export default campingZone