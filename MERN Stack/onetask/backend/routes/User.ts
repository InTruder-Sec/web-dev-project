import express from "express";
import Login from "../controllers/UserControlers/login";
import SignUp from "../controllers/UserControlers/Signup";

const User = express.Router();

User.post("/login", Login);
User.post("/signup", SignUp);

export default User;
