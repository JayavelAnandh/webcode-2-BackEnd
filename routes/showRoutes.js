import express from "express";
import { ShowSchema } from "../models/showSchema.js";

const router = express.Router();

router.get("/",async(req,res)=>{
    try {
        if(req.query){
            const givenQuery = req.query
            const findShow = await ShowSchema.find({givenQuery})
            return res.status(200).send(findShow)
        }
        if(!req.query){
            const findShow = await ShowSchema.find({})
            return res.status(200).send(findShow)
        }
       
    } catch (error) {
        res.status(500).send(error)
    }
})

export const ShowRoutes =router