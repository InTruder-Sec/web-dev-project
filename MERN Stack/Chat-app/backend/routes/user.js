import express from "express";
import { createUser, getUser, getUsersNames } from "../controllers/user.js";
import { sendOtp, verifyOtp } from "../controllers/OTP.js";
import { userLogout, userSession } from "../controllers/session.js";
import { ChatHandeler } from "../controllers/Chats.js";
import { GetChats } from "../controllers/FetchChats.js";

const userRouter = express.Router();

userRouter.get("/verify", getUser);
userRouter.post("/create", createUser);
userRouter.get("/search", getUsersNames);
userRouter.get("/sendotp", sendOtp);
userRouter.get("/verifyotp", verifyOtp);
userRouter.get("/session", userSession);
userRouter.get("/logout", userLogout);
userRouter.post("/sendchat", ChatHandeler);
userRouter.get("/getchats", GetChats);

export { userRouter };
