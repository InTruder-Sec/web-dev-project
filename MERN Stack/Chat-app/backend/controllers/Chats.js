import sdk from "node-appwrite";
import { ID, InputFile } from "node-appwrite";
import { writeFile } from "fs/promises";
import fs from "fs";

const client = new sdk.Client();
const storage = new sdk.Storage(client);

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject(process.env.PROJECT_ID)
  .setKey(process.env.FILE_CREATION_API);

export const ChatHandeler = (req, res) => {
  const svgCode = req.body.svg;
  try {
    writeFile("temp/image.svg", svgCode).then((file) => {
      const promise = storage.createFile(
        process.env.BUCKET_ID,
        ID.unique(),
        InputFile.fromPath("temp/image.svg", "image.svg")
      );

      promise.then(
        function (response) {
          console.log(response);
        },
        function (error) {
          console.log(error);
        }
      );
    });

    res.status(200).json({ message: "File succesfully created!" });
  } catch (err) {
    console.log(err);
    res.status(200).json({ message: "Something went wrong!", err: err });
  }
};
