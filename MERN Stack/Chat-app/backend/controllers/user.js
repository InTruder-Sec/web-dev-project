import UsersData from "../models/user.js";
import bcrypt from "bcrypt";

export const getUser = async (req, res) => {
  console.log("req recived");
  const { email, pass } = req.query;
  try {
    const data = await UsersData.findOne({ email: email });
    if (data != null) {
      const match = await bcrypt.compare(pass, data.password);
      if (match) {
        return res.status(200).json({ message: "Successfully logged in!" });
      } else {
        return res.status(401).json({ message: "Invalid email or password" });
      }
    } else {
      return res.status(401).json({ message: "Invalid email or password" });
    }
  } catch {
    console.log("Something went wrong");
  }
};

export const createUser = async (req, res) => {
  const { email, username, password } = req.body;
  console.log(email, username, password);
  const hashedPassword = await bcrypt.hash(password, 10);
  let newUser = new UsersData({
    username: username,
    email: email,
    password: hashedPassword,
  });
  await newUser.save();
  try {
  } catch (error) {
    console.log("Internal Server Error");
  }

  return res.status(200).json({ message: "User created", newUser });
};
