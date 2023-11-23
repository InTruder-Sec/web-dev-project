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
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const userSession = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.cookie);
    try {
        const authToken = req.cookies["auth-token"];
        console.log(authToken);
        const decoded = jsonwebtoken_1.default.verify(authToken, process.env.JWT_SECRET || "");
        console.log(decoded);
        if (!decoded) {
            res.status(500).json({ Message: "Invalid auth token!" });
        }
        console.log(authToken);
        res.status(200).json({ Message: "User session verified!" });
    }
    catch (error) {
        res.status(500).json({ Message: "No auth token found!" });
    }
});
exports.default = userSession;
