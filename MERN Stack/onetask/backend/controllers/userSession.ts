import jwt from "jsonwebtoken";
import { Request, Response } from "express";
import Users from "../models/users";

const userSession = async (req: Request, res: Response): Promise<void> => {
  console.log(req.cookies);
  try {
    const authToken = req.cookies["auth-token"];
    console.log(authToken);
    const decoded = jwt.verify(authToken, process.env.JWT_SECRET || "");
    console.log(decoded);

    if (!decoded) {
      res.status(500).json({ Message: "Invalid auth token!" });
    }
    console.log(authToken);
    res.status(200).json({ Message: "User session verified!" });
  } catch (error) {
    res.status(500).json({ Message: "No auth token found!" });
  }
};

export default userSession;
