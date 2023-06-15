import express from "express";
import {
  createUser,
  getUser,
  CreateChatRoom,
  getUsersNames,
} from "../controllers/user.js";

const userRouter = express.Router();

userRouter.get("/verify", getUser);
userRouter.post("/create", createUser);
userRouter.get("/search", getUsersNames);
userRouter.get("/:username", CreateChatRoom);

export default userRouter;
