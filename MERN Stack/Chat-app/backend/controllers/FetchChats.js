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
  const docId = req.query.id;
  if (docId !== "null") {
    try {
      databases
        .getDocument(process.env.DATABASE_ID, process.env.COLLECTION_ID, docId)
        .then((response) => {
          let chat_history = response.History;
          res.status(200).json({ message: "OK", data: chat_history });
        });
    } catch {
      res.status(200).json({ message: "NO" });
    }
  } else {
    res.status(200).json({ message: "OK", data: {} });
  }
};

export { GetChats };
