import express from "express";
import { login, newUser } from "../controllers/user.js";
const app = express.Router();

app.post("/new",login);
app.post("/login",newUser);


export default app;