"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const GetTasks_1 = __importDefault(require("../controllers/TaskControllers/GetTasks"));
const AddTasks_1 = __importDefault(require("../controllers/TaskControllers/AddTasks"));
const DeleteTasks_1 = __importDefault(require("../controllers/TaskControllers/DeleteTasks"));
const UpdateTasks_1 = __importDefault(require("../controllers/TaskControllers/UpdateTasks"));
const Tasks = express_1.default.Router();
Tasks.get("/get", GetTasks_1.default);
Tasks.post("/add", AddTasks_1.default);
Tasks.post("/delete", DeleteTasks_1.default);
Tasks.post("/update", UpdateTasks_1.default);
exports.default = Tasks;
