import mongoose from "mongoose";

export function DataBaseConnection(){
    const params={
        useNewUrlParser:true,
        useUnifiedTopology:true,

    };
    try {
        mongoose.connect(process.env.MONGO_URL,params)
        console.log("Database Successfuly connected")
    } catch (error) {
        console.log("MongoDB connection error",error)
    }
}