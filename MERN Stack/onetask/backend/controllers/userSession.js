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
const users_1 = __importDefault(require("../models/users"));
const userSession = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const authToken = req.headers["authorization"] || "";
        console.log(authToken);
        try {
            //ts ignore
            const jwtPayload = jsonwebtoken_1.default.verify(authToken, process.env.JWT_SECRET || "");
            // const { decoded } = jwt.verify(
            //   authToken,
            //   process.env.JWT_SECRET || ""
            // ) as JwtPayload;
            console.log(jwtPayload);
            // @ts-ignore
            const userId = jwtPayload.userId;
            console.log(userId);
            const UserData = yield users_1.default.findById(userId);
            const Task = UserData === null || UserData === void 0 ? void 0 : UserData.Tasks;
            res.status(200).json({
                message: "Valid auth token!",
                task: Task,
            });
        }
        catch (error) {
            console.log(error);
            res.status(500).json({ Message: "Invalid auth token!" });
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ Message: "No auth token found!" });
    }
});
exports.default = userSession;
