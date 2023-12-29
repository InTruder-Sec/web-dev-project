import express from "express";
import Auth from "../controller/Auth.js";
import getProfile from "../controller/getProfile.js";

const user = express.Router();

user.post("/auth", Auth);
user.get("/profile", getProfile);

export default user;
