"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userSession_1 = __importDefault(require("../UserControlers/userSession"));
const tasks_1 = __importDefault(require("../../models/tasks"));
const UpdateTasks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Body parameters: taskId, title, isCompleted
    try {
        const AuthHeader = req.headers.authorization;
        const user = (0, userSession_1.default)(AuthHeader || "");
        if (!user.isvalid) {
            res.status(401).json({ Message: "Please Login again!" });
            return;
        }
        else {
            if (!req.body.title || !req.body.taskId) {
                res.status(400).json({
                    Message: "Please provide a valid id, completion status, task id!",
                });
                return;
            }
            const newTask = {
                title: req.body.title,
                isCompleted: req.body.isCompleted,
            };
            const update = yield tasks_1.default.findOneAndUpdate({ _id: req.body.taskId }, { $set: newTask });
            console.log(update);
            res.status(200).json({ Message: "Task Updated Successfully!" });
        }
    }
    catch (error) {
        console.log(error);
    }
});
exports.default = UpdateTasks;
