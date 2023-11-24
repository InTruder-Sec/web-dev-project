import jwt from "jsonwebtoken";
import { Request, Response } from "express";
import Users from "../models/users";
import { Types } from "mongoose";

interface JwtPayload {
  userId: string;
  email: string;
  iat: number;
  exp: number;
}

const userSession = async (req: Request, res: Response) => {
  try {
    const authToken: string = req.headers["authorization"] || "";
    console.log(authToken);
    try {
      //ts ignore

      const jwtPayload = jwt.verify(
        authToken,
        process.env.JWT_SECRET || ""
      ) as JwtPayload;
      // const { decoded } = jwt.verify(
      //   authToken,
      //   process.env.JWT_SECRET || ""
      // ) as JwtPayload;
      console.log(jwtPayload);
      const userId: string = jwtPayload.userId;
      console.log(userId);
      const UserData = await Users.findById(userId);
      const Task: Types.ObjectId[] | undefined = UserData?.Tasks;
      res.status(200).json({
        message: "Valid auth token!",
        task: Task,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ Message: "Invalid auth token!" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ Message: "No auth token found!" });
  }
};

export default userSession;
