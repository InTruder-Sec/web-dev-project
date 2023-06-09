import mongoose from "mongoose";

const usersSchema = {
  username: String,
  email: String,
  password: String,
};

const UsersData = mongoose.model("UserData", usersSchema);

export default UsersData;
