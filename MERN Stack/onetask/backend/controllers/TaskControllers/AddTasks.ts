import { Request, Response } from "express";
import userSession from "../UserControlers/userSession";
import Users from "../../models/users";
import tasks from "../../models/tasks";

const AddTasks = async (req: Request, res: Response) => {
  try {
    const AuthHeader = req.headers.authorization;
    const user = userSession(AuthHeader || "");
    if (!user.isvalid) {
      res.status(401).json({ Message: "Please Login again!" });
      return;
    } else {
      try {
        // @ts-ignore
        if (!req.body.title) {
          res.status(400).json({ Message: "Please provide a title!" });
          return;
        }
        const task = {
          title: req.body.title,
          isCompleted: false,
        };
        const _id = user.userId;
        const userTasks = await tasks.create(task);
        await userTasks.save();

        const populateUser = await Users.findOneAndUpdate(
          { _id },
          { $push: { Tasks: userTasks._id } }
        );
        console.log(populateUser);
        res.status(200).json({
          Message: "Task Added Successfully!",
          newTask: userTasks,
        });
      } catch (err) {
        console.log(err);
        res
          .status(500)
          .json({ Message: "Something went wrong on our side :(" });
      }
    }
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ Message: "Something went wrong on our side :(", error: err });
  }
};

export default AddTasks;
