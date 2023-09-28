import { DataTypes} from "sequelize";
import { User } from "./user.js";

import connection from "../config/connection.js";


 export const CampingZone = connection.define("CampingZone",{
    name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    image:{
        type: DataTypes.STRING,
        allowNull: false
    },
    longitude:{
        type: DataTypes.STRING,
        allowNull: false
    },
    latitude:{
        type: DataTypes.TEXT,
        allowNull: false
    }
},
{timestamps: false}
)
CampingZone.belongsTo(User, {
    foreignKey: {
        name:"user_id",
        allowNull: false
    }
})


