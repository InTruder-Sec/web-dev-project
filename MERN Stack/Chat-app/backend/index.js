import express from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import cors from "cors";
import { Server } from "socket.io";
import { userRouter, ChatServer } from "./routes/user.js";

dotenv.config();
const app = express();
// Create express app and socket.io instance and export io to be used in ChatRoom.js

// CORS necessary for express to accept requests from React frontend
const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
};
app.use(cors(corsOptions));
app.use(cookieParser());

// Parse incoming requests with JSON payloads and urlencoded payloads
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use the routers
app.use("/users", userRouter);
app.use("/chat", ChatServer);

// Connect to MongoDB
mongoose.connect(process.env.SERVER_URL, { useNewUrlParser: true });

// Listen for socket.io connections
const server = app.listen(5000, () =>
  console.log("Server running on port 5000")
);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    credentials: true,
  },
});

global.onlineUsers = new Map();

io.on("connection", (socket) => {
  global.chatSoket = socket;
  socket.on("add-user", (userId) => {
    onlineUsers.set(userId, socket.id);
  });

  socket.on("send-msg", (data) => {
    const sendUserSocket = onlineUsers.get(data.to);
    if (sendUserSocket) {
      socket.to(sendUserSocket).emit("receive-msg", data);
    }
  });
});
