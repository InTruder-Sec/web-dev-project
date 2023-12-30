import mongoose from "mongoose";

const userProfile = {
  name: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  skills: {
    type: Array,
    required: true,
    default: [],
  },
  repos: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Repos",
    },
  ],
};

const userSchema = new mongoose.Schema(userProfile);
const User = mongoose.model("User", userSchema);

export default User;
