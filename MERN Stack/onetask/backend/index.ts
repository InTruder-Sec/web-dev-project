import express from "express";
import User from "./routes/User";
import Tasks from "./routes/Tasks";
import dotenv from "dotenv";
import mongoose from "mongoose";

const app = express();

dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/user", User);
app.use("/api/tasks", Tasks);

mongoose.connect(process.env.MONGO_URL || "");

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
