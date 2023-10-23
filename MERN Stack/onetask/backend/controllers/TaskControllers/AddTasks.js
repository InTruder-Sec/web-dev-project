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
const AddTasks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const AuthHeader = req.headers.authorization;
        const user = (0, userSession_1.default)(AuthHeader || "");
        if (!user.isvalid) {
            res.status(401).json({ Message: "Please Login again!" });
            return;
        }
        else {
            try {
                // @ts-ignore
                console.log(req.query);
                res.status(401).json({ Message: "Please Login again!" });
                //   const task = {
                //     Title: req.body.Title,
                //     isCompleted: false,
                //   };
                //   console.log(user.userId);
                //   // Users.findById(user.userId).then((user) => {
                //   //   if (user) {
                //   //     user.Tasks.push(task);
                //   //     user.save();
                //   //   }
                //   // });
                //   const userTasks = (await Users.findOneAndUpdate(
                //     { _id: user.userId?.trim() },
                //     { $push: { Tasks: task } }
                //   )) as { isvalid: boolean; userId: string | null };
                //   console.log(userTasks);
                //   if (true) {
                //     res.status(200).json({ Message: "Task Added Successfully!" });
                //   } else {
                //     res.status(500).json({ Message: "Invalid user!" });
                //   }
            }
            catch (err) {
                console.log(err);
                res
                    .status(500)
                    .json({ Message: "Something went wrong on our side :(" });
            }
        }
    }
    catch (err) {
        console.log(err);
        res
            .status(500)
            .json({ Message: "Something went wrong on our side :(", error: err });
    }
});
exports.default = AddTasks;
