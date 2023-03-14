import express from "express";
import { Theatre } from "../models/theatreSchema.js";

const router = express.Router();

router.post("/create",async(req,res)=>{
    try {
        const newTheatre = await new Theatre(
            {
                theatreName:req.body.theatreName,
                movieName:req.body.movieName,
                showTimings:req.body.showTimings,
                seatsBooked:req.body.seatsBooked,
                pricePerTicket:req.body.pricePerTicket
            }
        ).save()

        res.status(200).json({message:"Theatre cretaed successfully"})
    } catch (error) {
        res.status(500).json("Internal server error")
    }
    
})

router.get("/",async(req,res)=>{
    try {

        // if(req.query){
        //     const query = req.query
        //     const theatre = await Theatre.findOne({query})
        //     return res.status(200).send("hi")
        // }
        const theatre = await Theatre.find({})
        res.status(200).send(theatre)
    } catch (error) {
        console.log(error)
        res.status(500).json("Internal server error")

    }
})

router.delete("/delete/:id",async(req,res)=>{
    try {
        const theatreToDelete = await Theatre.findByIdAndDelete({_id:req.params.id})

        if(!theatreToDelete){
            return res.status(400).json({message:"There is no such a data on given id"})
        }

        res.status(201).send("Successfully deleted")
    } catch (error) {
        res.status(500).json("Internal server error")
    }
})

router.put("/update/:id",async(req,res)=>{
    try {
        const theatreToUpdate = await Theatre.findByIdAndUpdate(req.params.id,
            {
                theatreName:req.body.theatreName,
                movieName:req.body.movieName,
                showTimings:req.body.showTimings,
                pricePerTicket:req.body.pricePerTicket
        }
        )
        res.status(201).send("Updated Successfully")
    } catch (error) {
        console.log(error)
        res.status(500).json("Internal server error")
    }
})
export const theatreRoutes = router