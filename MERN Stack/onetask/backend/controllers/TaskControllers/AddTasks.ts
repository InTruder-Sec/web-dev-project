import { Request, Response } from "express";
import userSession from "../UserControlers/userSession";
import Users from "../../models/users";

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
        console.log(req.query);
        res.status(401).json({ Message: "Please Login again!" });

        //   const task = {
        //     Title: req.body.Title,
        //     isCompleted: false,
        //   };
        //   console.log(user.userId);
        //   // Users.findById(user.userId).then((user) => {
        //   //   if (user) {
        //   //     user.Tasks.push(task);
        //   //     user.save();
        //   //   }
        //   // });

        //   const userTasks = (await Users.findOneAndUpdate(
        //     { _id: user.userId?.trim() },
        //     { $push: { Tasks: task } }
        //   )) as { isvalid: boolean; userId: string | null };

        //   console.log(userTasks);
        //   if (true) {
        //     res.status(200).json({ Message: "Task Added Successfully!" });
        //   } else {
        //     res.status(500).json({ Message: "Invalid user!" });
        //   }
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
