import { Request, Response } from "express";

const GetTasks = (req: Request, res: Response): void => {
  res.status(200).json("GetTasks");
};

export default GetTasks;
