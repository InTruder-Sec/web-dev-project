import mongoose from "mongoose";

const usersSchema = {
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: String,
};

const UsersData = mongoose.model("UserData", usersSchema);

export default UsersData;
