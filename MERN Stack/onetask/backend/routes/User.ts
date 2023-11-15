import express from "express";
import Login from "../controllers/UserControlers/login";
import SignUp from "../controllers/UserControlers/Signup";

const User = express.Router();

User.get("/login", Login);
User.post("/signup", SignUp);

export default User;
