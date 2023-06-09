import mongoose from "mongoose";
import jwt from "jsonwebtoken";

const clientSchema = new mongoose.Schema(
    {
        name : {
            type: String,
            required : true,
            maxlength : 32,
            trim : true
        }, 
        email : {
            type: String,
            required : true,
            unique : true,
            trim : true
        }, 
        password : {
            type: String,
            required : true,
        },
    }
)

const generateAuthToken =(id)=>{
    return jwt.sign({id},process.env.SECRET_KEY)
}

const Client = mongoose.model("client",clientSchema);

export {generateAuthToken,Client}