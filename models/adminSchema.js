import mongoose from "mongoose";

const adminSchema = new mongoose.Schema(
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


const Admin = mongoose.model("admin",adminSchema);

export {Admin}