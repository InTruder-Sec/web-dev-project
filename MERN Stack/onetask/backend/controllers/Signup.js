"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Login = (req, res) => {
    console.log("Req recived");
    res.status(200).json("Login");
};
exports.default = Login;
