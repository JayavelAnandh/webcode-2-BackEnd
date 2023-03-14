import express from "express";
import { Booking } from "../models/bookingSchema.js";

const router = express.Router();

router.post("/",async(req,res)=>{
    try {
        const bookingData = await new Booking(
            {
                theatreName:req.body.theatreName,
                movieName:req.body.movieName,
                showTiming:req.body.showTiming,
                seatsBooked:req.body.seatsBooked,
                clientName:req.body.clientName
            }
        ).save()

        res.status(200).send("Booked Successfully")
    } catch (error) {
        console.log(error)
        res.status(500).json("Internal server error")
    }
    
})



export const bookingRoutes = router