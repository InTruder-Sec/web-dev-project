import { Request, Response } from "express";

const Login = (req: Request, res: Response): void => {
  res.status(200).json("GetTasks");
};

export default Login;
