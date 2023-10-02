import { DataTypes, INTEGER} from "sequelize";

import connection from "../config/connection.js";

import { User } from "./User.js";
import { CampingZone } from "./CampingZone.js";

 export const Review = connection.define("Review",{
    tittle:{
        type: DataTypes.STRING,
        allowNull: false
    },
    text:{
        type: DataTypes.TEXT,
        allowNull: false
    },
    stars: {
        type: INTEGER,
        allowNull: false
    }
},{timestamps: false}

)
Review.belongsTo(User, {
    foreignKey: {
        name:"user_id",
        allowNull: false
    }
})

Review.belongsTo(CampingZone, {
    foreignKey: {
        name:"campinZone_id",
        allowNull: false
    }
})

