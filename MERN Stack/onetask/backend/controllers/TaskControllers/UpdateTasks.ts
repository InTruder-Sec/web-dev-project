import { Request, Response } from "express";

const UpdateTasks = (req: Request, res: Response): void => {
  res.status(200).json({ message: "Route under construction!" });
};

export default UpdateTasks;
