import { Request, Response } from "express";
import Users from "../../models/users";
import tasks from "../../models/tasks";
import userSession from "../UserControlers/userSession";

const DeleteTasks = async (req: Request, res: Response) => {
  // Body parameters: taskId
  try {
    if (!req.body.taskId) {
      res.status(400).json({ Message: "Please provide a valid id!" });
      return;
    }

    const AuthHeader = req.headers.authorization;
    const user = userSession(AuthHeader || "");
    if (!user.isvalid) {
      res.status(401).json({ Message: "Please Login again!" });
      return;
    } else {
      // verify if the task belongs to the user
      await Users.findOneAndUpdate(
        { _id: user?.userId },
        { $pull: { Tasks: req.body.taskId } }
      );
      await tasks.deleteOne({ _id: req.body.taskId });
      res.status(200).json({ Message: "Task Deleted Successfully!" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ Message: "Something went wrong on our side :(" });
  }
};

export default DeleteTasks;
