import express from "express"
import bcrypt from "bcrypt"
import { Client, generateAuthToken } from "../models/clientSchema.js";
const router = express.Router(); 

router.post("/", async(req, res)=>{
    try {
        
        const isClient = await Client.findOne({email : req.body.email})
        if (!isClient){
            return res.status(400).json({message : "Invalid Credentials -Email"})
        }

        const validatePassword = await bcrypt.compare(
            req.body.password,
            isClient.password
        )
        if (!validatePassword) {
            return res.status(400).json({message:"Invalid Credentials  -password"})
        }

    const token =  generateAuthToken(Client._id); 

      res.status(200).json({message: "Logged in successfully", token})
    } catch (error) {
        console.log(error)
        res.status(500).json({message :"Internal server error"})
    }
})

export const loginClient = router