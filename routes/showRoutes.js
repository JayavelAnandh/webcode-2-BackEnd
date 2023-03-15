import express from "express";
import { ShowSchema } from "../models/showSchema.js";

const router = express.Router();

router.get("/",async(req,res)=>{
    
    try {
        // if(req.query){
        //     const currentQuery = req.query
        //     const response= await ShowSchema.find({currentQuery})
        //     return  res.status(200).send(response)
        // }
        const response= await ShowSchema.find({theatreId:req.body.theatreId})
        console.log(res)
       return  res.status(200).send(response)
    } catch (error) {
        res.status(500).send(error)
    }
})

export const ShowRoutes =router