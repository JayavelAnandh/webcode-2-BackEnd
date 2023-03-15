import express from "express";
import { Theatre } from "../models/theatreSchema.js";
import { ShowSchema } from "../models/showSchema.js";

const router = express.Router();

router.post("/create", async (req, res) => {
  try {
    const newTheatre = await new Theatre({
      theatreName: req.body.theatreName,
      movieName: req.body.movieName,
      showTimings: req.body.showTimings,
      pricePerTicket: req.body.pricePerTicket,
    }).save();
    req.body.showTimings.map((show) => {
      new ShowSchema({
        theatreId: newTheatre._id,
        time: show,
      }).save();
    });
    res.status(200).json({ message: "Theatre cretaed successfully" });
  } catch (error) {
    res.status(500).json("Internal server error");
  }
});
// request.showTimings.map( show => {
//     ShowsAPI.create({
//         "theatre-id": theatreResponse._id,
//         "time": show,
//         "seats-booked": []
//     })
// })

router.get("/", async (req, res) => {
  try {
    const theatre = await Theatre.find({});
    res.status(200).send(theatre);
  } catch (error) {
    console.log(error);
    res.status(500).json("Internal server error");
  }
});

router.get("/query", async (req, res) => {
  try {
    if (req.query) {
      console.log(req.query);
      const givenquery = req.query;
      const theatre = await Theatre.findOne(givenquery);
      return res.status(200).send(theatre);
    }
    res.send("Pass a query value");
  } catch (error) {
    console.log(error);
    res.status(500).json("Internal server error");
  }
});

router.delete("/delete/:id", async (req, res) => {
  try {
    const theatreToDelete = await Theatre.findByIdAndDelete({
      _id: req.params.id,
    });

    if (!theatreToDelete) {
      return res
        .status(400)
        .json({ message: "There is no such a data on given id" });
    }

    res.status(201).send("Successfully deleted");
  } catch (error) {
    res.status(500).json("Internal server error");
  }
});

router.put("/update/:id", async (req, res) => {
  try {
    const theatreToUpdate = await Theatre.findByIdAndUpdate(req.params.id, {
      theatreName: req.body.theatreName,
      movieName: req.body.movieName,
      showTimings: req.body.showTimings,
      pricePerTicket: req.body.pricePerTicket,
    });
    res.status(201).send("Updated Successfully");
  } catch (error) {
    console.log(error);
    res.status(500).json("Internal server error");
  }
});
export const theatreRoutes = router;
