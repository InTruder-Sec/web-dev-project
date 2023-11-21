import { Request, Response } from "express";

const Login = (req: Request, res: Response) => {
  console.log("Req recived");
  res.status(200).json("Login");
};

export default Login;
