import express from "express";
import { createUser, getUser } from "../controllers/user.js";

const userRouter = express.Router();

userRouter.get("/verify/:id", getUser);
userRouter.get("/create", createUser);

export default userRouter;
