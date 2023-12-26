import { Request, Response } from "express";
import userSession from "../UserControlers/userSession";
import tasks from "../../models/tasks";

const UpdateTasks = async (req: Request, res: Response) => {
  // Body parameters: taskId, title, isCompleted
  try {
    const AuthHeader = req.headers.authorization;
    const user = userSession(AuthHeader || "");
    if (!user.isvalid) {
      res.status(401).json({ Message: "Please Login again!" });
      return;
    } else {
      if (!req.body.title || !req.body.taskId) {
        res.status(400).json({
          Message: "Please provide a valid id, completion status, task id!",
        });
        return;
      }
      const newTask = {
        title: req.body.title,
        isCompleted: req.body.isCompleted,
      };

      const update = await tasks.findOneAndUpdate(
        { _id: req.body.taskId },
        { $set: newTask }
      );
      console.log(update);
      res.status(200).json({ Message: "Task Updated Successfully!" });
    }
  } catch (error) {
    console.log(error);
  }
};

export default UpdateTasks;
