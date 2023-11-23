import express from "express";
import Login from "../controllers/login";
import SignUp from "../controllers/Signup";
import userSession from "../controllers/userSession";

const User = express.Router();

User.get("/login", Login);
User.post("/signup", SignUp);
User.get("/verify", userSession);

export default User;
