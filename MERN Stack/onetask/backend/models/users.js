"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const usersSchema = new mongoose_1.default.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        require: true,
    },
    Tasks: [
        {
            type: mongoose_1.default.Schema.Types.ObjectId,
            ref: "Tasks",
        },
    ],
    session: {
        type: String,
        default: "",
    },
});
const Users = mongoose_1.default.model("Users", usersSchema);
exports.default = Users;
