import mongoose from "mongoose";

const theatreSchema = new mongoose.Schema(
    {
        theatreName:{
            type: String,
            required : true,
            maxlength : 32,
            trim : true
        },
        movieName:{
            type: String,
            required : true,
            maxlength : 32,
            trim : true
        },
        showTimings:{
            type:Array,

        },
        
        pricePerTicket:{
            type:Number,
            default:150
        }
    }
)

const Theatre = mongoose.model("theatre",theatreSchema)

export {Theatre}