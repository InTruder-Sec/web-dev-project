import { Request, Response } from "express";

const DeleteTasks = (req: Request, res: Response) => {
  console.log("Req recived");
  res.status(200).json("Login");
};

export default DeleteTasks;
