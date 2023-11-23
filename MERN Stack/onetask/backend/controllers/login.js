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
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const users_1 = __importDefault(require("../models/users"));
const Login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    if (req.query.email == undefined || req.query.password == undefined) {
        res.status(500).json({ Message: "Email and password are required!" });
    }
    try {
        const userDetails = yield users_1.default.findOne({ email: req.query.email });
        if (userDetails) {
            const password = (_a = req.query.password) === null || _a === void 0 ? void 0 : _a.toString();
            if (bcrypt_1.default.compareSync(password || "", userDetails.password || "")) {
                const data = {
                    message: "Login successful!",
                    token: jsonwebtoken_1.default.sign({ userId: userDetails._id, userEmail: userDetails.email }, process.env.JWT_SECRET || "", {
                        algorithm: "HS256",
                        expiresIn: "7d",
                    }),
                    task: userDetails.Tasks,
                };
                res.status(200).json(data);
            }
            else
                res.status(500).json({ Message: "Incorrect password!" });
        }
        else {
            res.status(500).json({ Message: "Email not registered!" });
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ Message: "Something went wrong on our side :(" });
    }
});
exports.default = Login;
