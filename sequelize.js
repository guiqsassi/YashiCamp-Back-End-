import { DataTypes, Sequelize } from "sequelize";
import user from "./models/user.js";
import connection from "./config/connection.js";

connection.authenticate().then(()=>{console.log("conectado com sucesso");}).catch((err)=>{console.log("falha ao se conectar" + err);})


connection.sync({force: true})

