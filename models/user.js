import { DataTypes} from "sequelize";

import connection from "../config/connection.js";
import { CampingZone } from "./CampingZone.js";

export const User = connection.define("user", {
    email:{
     type: DataTypes.STRING,
     allowNull: false,
    },
    username:{
     type: DataTypes.STRING,
     allowNull: false,
    },
    password:{
     type: DataTypes.STRING,
     allowNull: false,
    }
 },{timestamps:false})


