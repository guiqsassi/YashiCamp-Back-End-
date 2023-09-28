import { DataTypes} from "sequelize";

import connection from "../config/connection.js";

import { User } from "./user.js";


 export const Post = connection.define("Post",{
    tittle:{
        type: DataTypes.STRING,
        allowNull: false
    },
    text:{
        type: DataTypes.TEXT,
        allowNull: false
    }
},

)
Post.belongsTo(User, {
    foreignKey: {
        name:"user_id",
        allowNull: false
    }
})

