import { Request, Response } from "express";
import bcrypt from "bcrypt";
import Users from "../models/users";

const SignUp = async (req: Request, res: Response): Promise<void> => {
  if (req.body.email === null && req.body.password === null) {
    res.status(500).json({ Message: "Email and password are required!" });
  }
  try {
    const hashedpass = bcrypt.hashSync(req.body.password, 10);
    const newUser = await Users.create({
      email: req.body.email,
      password: hashedpass,
    });
    res
      .status(200)
      .json({ Message: "User created! Please login again.", newUser: newUser });
  } catch (error) {
    //   if (error.code === 11000)
    //     res.status(500).json({ Message: "Email already registered!" });
    //   else
    //     res.status(500).json({ Message: "Something went wrong on our side :(" });
    console.log(error);
  }
};

export default SignUp;
