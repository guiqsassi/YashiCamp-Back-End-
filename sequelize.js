import { DataTypes, Sequelize } from "sequelize";
import {User}from "./models/user.js";
import {Post} from "./models/post.js";
import { CampingZone } from "./models/campingZone.js";
import connection from "./config/connection.js";

connection.authenticate().then(()=>{console.log("conectado com sucesso");}).catch((err)=>{console.log("falha ao se conectar" + err);})


connection.sync({force: true})

