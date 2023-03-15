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
import { isAuthorized } from "./authentication/auth.js";
import { ShowRoutes } from "./routes/showRoutes.js";
import { isAdmin } from "./authentication/authAdmin.js";
import { TheaterView } from "./routes/theaterView.js";
// import { signUpAdmin } from "./routes/adminRoutes.js";


const app = express()
dotenv.config()

DataBaseConnection();
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("Hi Welcome!!!")
})

app.use(cors());

app.use("/client",clientRoutes)
app.use("/clientSignup",signUpClient)
app.use("/clientLogin",loginClient)


app.use("/theatre",isAdmin,theatreRoutes)

app.use("/theatreView",TheaterView)
app.use("/bookinglogs",bookingLogs)

// app.use("/adminsignup",signUpAdmin)
app.use("/loginAdmin",loginAdmin)

app.use("/booking",isAuthorized,bookingRoutes)

app.use("/shows",ShowRoutes)
app.listen(process.env.PORT)
