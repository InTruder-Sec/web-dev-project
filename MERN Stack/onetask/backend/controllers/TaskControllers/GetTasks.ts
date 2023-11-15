import { Request, Response } from "express";
import userSession from "../UserControlers/userSession";
import Users from "../../models/users";

const GetTasks = async (req: Request, res: Response) => {
  try {
    const AuthHeader = req.headers.authorization;
    console.log(AuthHeader);
    const user = userSession(AuthHeader || "");
    if (!user.isvalid) {
      res.status(401).json({ Message: "Please Login again!" });
      return;
    } else {
      try {
        const userTasks = await Users.findById(user.userId);
        res.status(200).json({ Tasks: userTasks?.Tasks });
      } catch (err) {
        console.log(err);
        res
          .status(500)
          .json({ Message: "Something went wrong on our side :(" });
      }
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ Message: "Something went wrong on our side :(" });
  }
};

export default GetTasks;
