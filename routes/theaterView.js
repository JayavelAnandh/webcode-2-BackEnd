import express from "express"
import { Theatre } from "../models/theatreSchema.js";

const router = express.Router()

router.get("/", async (req, res) => {
    try {
      const theatre = await Theatre.find({});
      res.status(200).send(theatre);
    } catch (error) {
      console.log(error);
      res.status(500).json("Internal server error");
    }
  });

 export  const TheaterView = router