import mongoose from "mongoose";

const usersSchema = {
  username: String,
  email: String,
  p: String,
};

const UsersData = mongoose.model("UserData", usersSchema);

export default UsersData;
