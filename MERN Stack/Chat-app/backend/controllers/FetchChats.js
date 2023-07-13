import UsersData from "../models/user.js";
import sdk, { ID } from "node-appwrite";

// Init SDK
const client = new sdk.Client();

const databases = new sdk.Databases(client);

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("64a7ac5899392aecc83b")
  .setKey(process.env.API_KEY);

const GetChats = (req, res) => {
  try {
    UsersData.findById(req.query.id).then((e) => {
      console.log(e);
      res.status(200).json({ message: "OK" });
    });
  } catch {
    res.status(200).json({ message: "NO" });
  }
};

export { GetChats };
