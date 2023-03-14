import express from "express";
import { Booking } from "../models/bookingSchema.js";

const router = express.Router();

router.get("/",async(req,res)=>{
    try {
        const bookedLogs = await Booking.find({})
        res.status(200).send(bookedLogs)
    } catch (error) {
        res.status(500).json("Internal server error")

    }
})

export const bookingLogs = router 