import express from "express";
import { DataBaseConnection } from "./db.js";
import dotenv from "dotenv";
import { clientRoutes } from "./routes/ClientRoutes.js";
import { signUpClient } from "./routes/signupClient.js";
import { loginClient } from "./routes/loginClient.js";
import { theatreRoutes } from "./routes/theatreRoutes.js";
import { loginAdmin } from "./routes/adminRoutes.js";
import cors from "cors"
import { bookingRoutes } from "./routes/booking.js";
import { bookingLogs } from "./routes/bookedlogs.js";
// import { signUpAdmin } from "./routes/adminRoutes.js";


const app = express()
dotenv.config()

DataBaseConnection();
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("Hi Welcome!!!")
})

app.use(cors())

app.use("/client",clientRoutes)
app.use("/clientSignup",signUpClient)
app.use("/clientLogin",loginClient)

app.use("/theatre",theatreRoutes)
app.use("/bookinglogs",bookingLogs)

// app.use("/adminsignup",signUpAdmin)
app.use("/loginAdmin",loginAdmin)

app.use("/booking",bookingRoutes)
app.listen(process.env.PORT)

//"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MTA1ODgyYjg5NWQ1NWYxZmM2ZWVlYSIsImlhdCI6MTY3ODc5MjgzNH0.wp0DzxaCwZelPBAzUnR9cQ_KycuxXRwnMKqI0BL9A3M"
//{
//    "name":"Admin",
//    "email":"Admin123@gmail.com",
//    "password":"AdminAdmin"
//}