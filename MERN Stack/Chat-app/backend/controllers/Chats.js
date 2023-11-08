import sdk from "node-appwrite";
import { ID } from "node-appwrite";
import { InputFile } from "node-appwrite";
import { writeFile, unlink } from "fs/promises";
import { UserHistoryMap } from "./../utils/UserHistoryMap.js";
import { CreateNewChat } from "../utils/CreateNewChat.js";
import UsersData from "../models/user.js";
import { PushToAppwrite } from "../utils/PushToAppwrite.js";

// Init SDK
const client = new sdk.Client();

const storage = new sdk.Storage(client);

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("64a7ac5899392aecc83b")
  .setKey(process.env.API_KEY);

export const ChatHandeler = async (req, res) => {
  const data = req.body.svg;
  try {
    writeFile("temp/image.png", data).then(() => {
      const promise = storage.createFile(
        process.env.BUCKET_ID,
        ID.unique(),
        InputFile.fromPath("temp/image.png", "image.png")
      );

      promise.then(
        async function (response) {
          unlink("temp/image.png");
          const URL = `https://cloud.appwrite.io/v1/storage/buckets/${response.bucketId}/files/${response.$id}/view?project=64a7ac5899392aecc83b`;
          // User Details

          let S_ID = req.body.SessionUser.id;
          let S_USERNAME = req.body.SessionUser.username;
          let d = await UsersData.findById(S_ID);
          let R_ID = req.body.ReciverDetails.id;
          let S_CH = d.chat_history;
          let R_USERNAME = req.body.ReciverDetails.username;
          //   Check whether the chat history of user exist ? Update the document : Create an new object inside the same document
          let DoesExist = await UserHistoryMap(S_CH, R_USERNAME);
          console.log(DoesExist);
          if (DoesExist) {
            // Update the document, Other Users's Chat History
            PushToAppwrite(DoesExist, S_ID, URL);
            await res
              .status(200)
              .json({ message: "Chat successfilly added!", ImageUrl: URL });
            // PushMessage to history in appwrite database
          } else {
            // Create new Document, Add to current, other users's Chat History

            CreateNewChat(R_ID, S_ID, URL, S_USERNAME, R_USERNAME);
            await res
              .status(200)
              .json({ message: "Chat successfilly added!", ImageUrl: URL });
          }
        },
        function (error) {
          res.status(200).json({ message: "NO" });
          console.log(error);
        }
      );
    });
  } catch (err) {
    console.log(err);
    res.status(501).json({ messeage: "Internal server occured" });
  }
};
