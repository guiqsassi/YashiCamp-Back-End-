import { DataTypes, Sequelize } from "sequelize";
import {User}from "./models/User.js";
import {Review} from "./models/Review.js";
import { CampingZone } from "./models/CampingZone.js";
import {Favoritos} from "./models/Favoritos.js"
import connection from "./config/connection.js";

CampingZone.belongsTo(User, {
    foreignKey: {
        name:"user_id",
        allowNull: false
    }
})
CampingZone.belongsToMany(User, {
    through: "favoritos",
    as: "campingzone_id",
    foreignKey: "campingzone_id"
})
User.belongsToMany(CampingZone, {
    through: "favoritos",
    as: "user_id",
    foreignKey: "user_id"
})



connection.authenticate().then(()=>{console.log("conectado com sucesso");}).catch((err)=>{console.log("falha ao se conectar" + err);})


connection.sync({force: true})

