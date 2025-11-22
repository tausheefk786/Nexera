import express from "express";
import userRoute from "./routes/user.js"
import { connectDB } from "./utils/features.js";
import dotenv from "dotenv";
import { errorMiddleware } from "./middlewares/error.js";

dotenv.config({
    path: "./.env",
})

const port = process.env.PORT || 3000;
connectDB(process.env.MONGO_URI);

const app = express();


//using middleware
app.use(express.json());


app.use("/user",userRoute);

app.get("/",(req,res)=>{
    res.send("hello world")
})
app.use(errorMiddleware);

app.listen(port, ()=>{
    console.log(`server is running at ${port}`);
})