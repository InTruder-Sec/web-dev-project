import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import userRouter from "./routes/user.js";

dotenv.config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/users", userRouter);

mongoose.connect(process.env.SERVER_URL, { useNewUrlParser: true });

app.listen(5000, () => console.log("Server running on port 5000"));
