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
  last_seen: {
    type: Date,
    default: new Date(),
  },
};

const schema = new mongoose.Schema(usersSchema, { timestamps: true });

const UsersData = mongoose.model("UserData", schema);

export default UsersData;
