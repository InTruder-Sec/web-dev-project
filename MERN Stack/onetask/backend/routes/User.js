"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const login_1 = __importDefault(require("../controllers/login"));
const Signup_1 = __importDefault(require("../controllers/Signup"));
const userSession_1 = __importDefault(require("../controllers/userSession"));
const User = express_1.default.Router();
User.get("/login", login_1.default);
User.post("/signup", Signup_1.default);
User.get("/verify", userSession_1.default);
exports.default = User;
