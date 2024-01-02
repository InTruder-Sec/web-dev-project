import mongoose from "mongoose";

const reposSchema = new mongoose.Schema({
  repoName: {
    type: String,
    required: true,
  },
  repoDescription: {
    type: String,
    required: true,
  },
  repoLink: {
    type: String,
    required: true,
  },
  repoTags: {
    type: Array,
    required: true,
    default: [],
  },
  repoOwner: {
    type: String,
    required: true,
  },
  repoLocation: {
    type: String,
    required: true,
  },
  // repoDate: {
  //   type: ISO,
  // },
});

const Repos = mongoose.model("Repos", reposSchema);

export default Repos;
