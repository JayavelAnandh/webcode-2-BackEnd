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
            show1:{
                seatsBooked:{
                    type:Array,
                    maxlength:100,
                    default:[]
                }
            },
            show2:{
                seatsBooked:{
                    type:Array,
                    maxlength:100,
                    default:[]
                }
            },
            show3:{
                seatsBooked:{
                    type:Array,
                    maxlength:100,
                    default:[]
                }
            },
        },
        
        pricePerTicket:{
            type:Number,
            default:150
        }
    }
)

const Theatre = mongoose.model("theatre",theatreSchema)

export {Theatre}