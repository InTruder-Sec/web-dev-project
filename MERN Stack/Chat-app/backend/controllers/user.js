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
  } catch {
    console.log("Something went wrong");
  }
};

export const createUser = async (req, res) => {
  const { email, username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  let newUser = new UsersData({
    username: username,
    email: email,
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

export const getUsersNames = async (req, res) => {
  const users = await UsersData.find();
  let usersNames = [];
  users.map((user) => {
    usersNames.push([user.username, user.id]);
  });
  return res.status(200).json({ usersNames });
};

export const CreateChatRoom = async (req, res) => {
  const users = await UsersData.find();
  const id = [];
  users.map((user) => {
    id.push(user.id);
  });
  if (id.includes(req.params.username)) {
    return res.status(200).json({ message: "User exist", code: 200 });
  } else {
    return res.status(200).json({ message: "User does not exist", code: 404 });
  }
};
