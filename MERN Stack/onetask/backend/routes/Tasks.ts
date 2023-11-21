import express from "express";
import GetTasks from "../controllers/GetTasks";

const Tasks = express.Router();

Tasks.get("/tasks", GetTasks);

export default Tasks;
