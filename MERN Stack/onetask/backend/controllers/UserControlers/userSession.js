"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const userSession = (authToken) => {
    try {
        const jwtPayload = jsonwebtoken_1.default.verify(authToken, process.env.JWT_SECRET || "");
        const userId = jwtPayload.userId;
        return { isvalid: true, userId: userId };
    }
    catch (error) {
        console.log(error);
        return { isvalid: false, userId: null };
    }
};
exports.default = userSession;
