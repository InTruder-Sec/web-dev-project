import express from "express";
import { createUser, getUser } from "../controllers/user.js";

const userRouter = express.Router();

userRouter.get("/verify/:id", getUser);
userRouter.post("/create", createUser);

export default userRouter;
