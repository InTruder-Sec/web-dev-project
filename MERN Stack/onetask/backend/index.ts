import express from "express";
import User from "./routes/User";
import Tasks from "./routes/Tasks";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";

const app = express();

dotenv.config();

const corsOptions = {
  origin: "https://one-task.netlify.app",
  credentials: true,
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/user", User);
app.use("/api/tasks", Tasks);

mongoose.connect(process.env.MONGO_URL || "");

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log("Server is running on port 8080");
});
