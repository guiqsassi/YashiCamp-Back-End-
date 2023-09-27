import { DataTypes } from "sequelize";
import connection from "../config/connection.js";
import User from "./user.js";

    const Post = connection.define("Post",{
        tittle:{
            type: DataTypes.STRING,
            allowNull: false
        },
        text:{
            type: DataTypes.TEXT,
            allowNull: false
        }
    },

    ).belongsTo(User, {
        foreignKey: "user_id"
    })

    export default Post