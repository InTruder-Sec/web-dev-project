"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const User_1 = __importDefault(require("./routes/User"));
const Tasks_1 = __importDefault(require("./routes/Tasks"));
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
const app = (0, express_1.default)();
dotenv_1.default.config();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use("/api/user", User_1.default);
app.use("/api/tasks", Tasks_1.default);
mongoose_1.default.connect(process.env.MONGO_URL || "");
app.listen(5000, () => {
    console.log("Server is running on port 5000");
});
