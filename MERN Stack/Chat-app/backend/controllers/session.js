import jwt from "jsonwebtoken";
import UsersData from "../models/user.js";

export const userSession = async (req, res) => {
  if (!req.cookies.token) {
    res.status(200).json({ message: "Invalid token", code: 500 });
  } else {
    const token = req.cookies.token;
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      try {
        UsersData.findById(decoded.id).then((data) => {
          if (data != null) {
            data.updatedAt = new Date();
            data.save();
            res.status(200).json({
              message: "Valid token",
              code: 200,
              data: {
                id: data._id,
                username: data.username,
                email: data.email,
                chat_history: data.chat_history,
              },
            });
          } else {
            res.status(200).json({ message: "Invalid token", code: 500 });
          }
        });
      } catch (err) {
        console.log(err);
        res.status(200).json({ message: "Invalid token", code: 500 });
      }
    } catch (err) {
      console.log(err);
      res.status(200).json({ message: "Invalid token", code: 500 });
    }
  }
};

export const userLogout = async (req, res) => {
  console.log("Request recived");
  if (!req.cookies.token) {
    res.status(200).json({ message: "Invalid token", code: 500 });
  } else {
    const token = req.cookies.token;
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      try {
        UsersData.findById(decoded.id).then((data) => {
          if (data != null) {
            data.last_seen = new Date();
            res.clearCookie("token");
            res.status(200).json({
              message: "Logout successful",
              code: 200,
            });
          } else {
            res.status(200).json({ message: "Invalid token", code: 500 });
          }
        });
      } catch (err) {
        console.log(err);
        res.status(200).json({ message: "Invalid token", code: 500 });
      }
    } catch (err) {
      console.log(err);
      res.status(200).json({ message: "Invalid token", code: 500 });
    }
  }
};
