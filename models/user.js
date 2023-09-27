import { DataTypes} from "sequelize";

import connection from "../config/connection.js";
import Post from "./post.js";

const User = connection.define("user", {
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
    
 export default User