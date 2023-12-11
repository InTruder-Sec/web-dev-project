import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import Users from "../../models/users";
import { Types } from "mongoose";

type ReturnData = {
  message: string;
  token: string;
  task: Types.ObjectId[];
};

const Login = async (req: Request, res: Response): Promise<void> => {
  if (req.query.email == undefined || req.query.password == undefined) {
    res.status(500).json({ Message: "Email and password are required!" });
  } else {
    try {
      const userDetails = await Users.findOne({ email: req.query.email });

      if (userDetails) {
        const password = req.query.password?.toString();

        if (bcrypt.compareSync(password || "", userDetails.password || "")) {
          const data: ReturnData = {
            message: "Login successful!",
            token: jwt.sign(
              { userId: userDetails._id, userEmail: userDetails.email },
              process.env.JWT_SECRET || "",
              {
                algorithm: "HS256",
                expiresIn: "7d",
              }
            ),
            task: userDetails.Tasks,
          };

          res.status(200).json(data);
        } else res.status(500).json({ Message: "Incorrect password!" });
      } else {
        res.status(500).json({ Message: "Email not registered!" });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ Message: "Something went wrong on our side :(" });
    }
  }
};

export default Login;
