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
  chat_history: {
    type: Array,
    default: [],
  },
  otp: {
    type: Number,
  },
};

const UsersData = mongoose.model("UserData", usersSchema);

export default UsersData;
