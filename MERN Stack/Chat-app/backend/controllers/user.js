import UsersData from "../models/user.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

import { UserActivity } from "../utils/UserActivity.js";

// Login user

export const getUser = async (req, res) => {
  const { email, pass } = req.query;
  try {
    const data = await UsersData.findOne({ email: email.toLowerCase() });
    if (data != null) {
      const match = await bcrypt.compare(pass, data.password);
      if (match) {
        const token = jwt.sign(
          { id: data._id, email: data.email },
          process.env.JWT_SECRET,
          {
            expiresIn: "7d",
          }
        );
        data.session = token;
        data.save();
        res.cookie("token", token, {
          maxAge: 7 * 24 * 60 * 60 * 1000,
          httpOnly: true,
        });
        return res
          .status(200)
          .json({ data: { message: "Logged in successfully", id: data.id } });
      } else {
        return res
          .status(200)
          .json({ data: { message: "Invalid email or password", id: null } });
      }
    } else {
      return res
        .status(200)
        .json({ data: { message: "Invalid email or password", id: null } });
    }
  } catch (err) {
    console.log(err);
    console.log("Something went wrong");
    return res
      .status(500)
      .json({
        data: { message: "Something went wrong on our side: (", id: null },
      });
  }
};

// Create a new user

export const createUser = async (req, res) => {
  const { email, username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  let newUser = new UsersData({
    username: username,
    email: email.toLowerCase(),
    password: hashedPassword,
  });

  try {
    await newUser.save();
  } catch (error) {
    console.log(error);
    return res.status(200).json(error);
  }

  return res.status(200).json({ message: "User created", code: 200, newUser });
};

// Search for users

export const getUsersNames = async (req, res) => {
  const param = req.query.username;
  const userId = req.query.userId;
  try {
    const users = await UsersData.find({
      username: { $regex: param },
      _id: { $ne: userId },
    });

    const returnData = users.map((user) => {
      // Call middleware function to check last onilne time

      const lastActive = UserActivity(user.updatedAt);
      return {
        username: user.username,
        id: user._id,
        updated_at: lastActive,
      };
    });

    return res.status(200).json(returnData);
  } catch {
    return res.status(200).json([]);
  }
};
