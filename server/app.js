import express from "express";
import userRoute from "./routes/user.js"
import { connectDB } from "./utils/features.js";
import dotenv from "dotenv";

dotenv.config({
    path: "./.env",
})

const port = process.env.PORT || 3000;
connectDB(process.env.MONGO_URI);

const app = express();


app.use("/user",userRoute);

app.get("/",(req,res)=>{
    res.send("hello world lund mera")
})

app.listen(port, ()=>{
    console.log(`server is running at ${port}`);
})