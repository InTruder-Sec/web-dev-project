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
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
dotenv_1.default.config();
const corsOptions = {
    origin: "https://one-task.netlify.app",
    credentials: true,
};
app.use((0, cors_1.default)(corsOptions));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use("/api/user", User_1.default);
app.use("/api/tasks", Tasks_1.default);
mongoose_1.default.connect(process.env.MONGO_URL || "");
const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log("Server is running on port 8080");
});
