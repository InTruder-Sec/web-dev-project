import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import user from "./routes/User.js";

dotenv.config();
const app = express();

const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use the routers
app.use("/api/user", user);

await mongoose.connect(process.env.SERVER_URL);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
