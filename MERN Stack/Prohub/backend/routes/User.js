import express from "express";
import Auth from "../controller/Auth.js";
import getProfile from "../controller/getProfile.js";
import addUser from "../controller/AddUser.js";
import addRepo from "../controller/AddRepo.js";

const user = express.Router();

user.post("/auth", Auth);
user.get("/profile", getProfile);
user.post("/onBoarding", addUser);
user.post("/add", addRepo);

export default user;
