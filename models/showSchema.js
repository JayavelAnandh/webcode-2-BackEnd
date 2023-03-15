import mongoose from "mongoose";

const showSchema = new mongoose.Schema({
  theatreId: {
    type: String,
  },
  time: {
    type: String,
  },
  seatsBooked: {
    type: Array,
    default: [],
  },
});

 const ShowSchema = mongoose.model("showSchema",showSchema) 
export {ShowSchema }