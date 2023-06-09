import UsersData from "../models/user.js";

export const getUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await UsersData.findById(id);
    return res.status(200).json({ message: "User found", user });
  } catch (error) {
    console.log("Internal Server Error");
  }
};

export const createUser = async (req, res) => {
  const { username, email, password } = req.body;

  const cryptRounds = 10;

  let newUser = new UsersData({
    username: username,
    email: email,
    password: password,
  });
  console.log(req);
  await newUser.save();
  try {
  } catch (error) {
    console.log("Internal Server Error");
  }

  return res.status(200).json({ message: "User created", newUser });
};
