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
  session: {
    type: String,
    default: "",
  },
  chat_history: {
    type: Array,
    default: [],
  },
  otp: {
    type: Array,
    default: [],
  },
};

const UsersData = mongoose.model("UserData", usersSchema);

export default UsersData;
