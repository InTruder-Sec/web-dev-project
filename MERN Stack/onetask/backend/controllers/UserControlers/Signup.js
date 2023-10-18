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
const users_1 = __importDefault(require("../../models/users"));
const SignUp = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (req.body.email === null && req.body.password === null) {
        res.status(500).json({ Message: "Email and password are required!" });
    }
    try {
        const hashedpass = bcrypt_1.default.hashSync(req.body.password, 10);
        const newUser = yield users_1.default.create({
            email: req.body.email,
            password: hashedpass,
        });
        res
            .status(200)
            .json({ Message: "User created! Please login again.", newUser: newUser });
    }
    catch (error) {
        // if (error.code === 11000)
        //   res.status(500).json({ Message: "Email already registered!" });
        // else
        //   res.status(500).json({ Message: "Something went wrong on our side :(" });
        console.log(error);
    }
});
exports.default = SignUp;
