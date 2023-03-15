import express from "express";
import { ShowSchema } from "../models/showSchema.js";

const router = express.Router();

router.get("/",async(req,res)=>{
    
    try {
        if(req.query){
            const currentQuery = req.query.theatreId
            const response= await ShowSchema.find({theatreId:currentQuery})
            console.log(response)
            return  res.status(200).send(response)
        }
        
        if(!req.query){
            return  res.status(400).send("Add a query")
        }
       
    } catch (error) {
        res.status(500).send(error)
    }
})

export const ShowRoutes =router