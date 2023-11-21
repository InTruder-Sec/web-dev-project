import express from "express";
import Login from "../controllers/login";
import SignUp from "../controllers/Signup";

const User = express.Router();

User.get("/login", Login);
User.post("/signup", SignUp);

export default User;
