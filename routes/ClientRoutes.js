import express from "express";
import { Client } from "../models/clientSchema.js";

const router = express.Router();

router.get("/",async(req,res)=>{
    try {
        const clients = await Client.find({})
        res.status(200).send(clients)
    } catch (error) {
        res.status(500).json("Internal server error")
    }
    

})

export const clientRoutes = router