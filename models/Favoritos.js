import { DataTypes} from "sequelize";
import { CampingZone } from "./CampingZone.js";
import { User } from "./User.js";
import connection from "../config/connection.js";

export const Favoritos = connection.define("Favoritos",{
    user_id:{
        type: DataTypes.INTEGER,
        references: {model: User, key: "id"},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: false,
    },
    campingzone_id:{
        type: DataTypes.INTEGER,
        references: {model: CampingZone, key: "id"},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: false,
    }
    

}, {timestamps: false})
