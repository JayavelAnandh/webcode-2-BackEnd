import express from "express";
import { Client, generateAuthToken } from "../models/clientSchema.js";
import bcrypt from "bcrypt"

const router = express.Router();

router.post("/",async(req,res)=>{
    try {
        const isClient = await Client.findOne({email:req.body.email})

        if(isClient){
            return res.status(409).json({message:"E-mail Already exists as Client"})
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password,salt)


        let client = await new Client({
            name:req.body.name,
            email:req.body.email,
            password:hashedPassword
        }).save()
        
        const token = generateAuthToken(client._id); 
        res.status(201).json({message : "Successfully signed up", token})


    } catch (error) {
        console.log(error)
        res.status(500).json({message : "Internal server error"}) 
    }
})

export const signUpClient = router;