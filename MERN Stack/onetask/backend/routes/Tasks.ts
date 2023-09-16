import express from "express";
import GetTasks from "../controllers/TaskControllers/GetTasks";
import AddTasks from "../controllers/TaskControllers/AddTasks";
import DeleteTasks from "../controllers/TaskControllers/DeleteTasks";
import UpdateTasks from "../controllers/TaskControllers/UpdateTasks";

const Tasks = express.Router();

Tasks.get("/get", GetTasks);
Tasks.post("/add", AddTasks);
Tasks.post("/delete", DeleteTasks);
Tasks.post("/update", UpdateTasks);

export default Tasks;
