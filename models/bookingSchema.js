import mongoose from "mongoose";

const  bookingSchema = new mongoose.Schema(
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
        showTiming:{
            type:String,
            required:true,
        },
        seatsBooked:{
            type:Array,
            default:[]
        },
        clientName:{
            type: String,
            required : true,
            maxlength : 32,
            trim : true
        }
    }
)

const Booking = mongoose.model("booking",bookingSchema)

export {Booking}