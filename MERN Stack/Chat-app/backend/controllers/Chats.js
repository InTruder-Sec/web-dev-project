import { Client, ID, Storage } from "appwrite";

const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject(process.env.PROJECT_ID);

const storage = new Storage(client);

export const ChatHandeler = async (req, res) => {
  const svg = req.body.svg;
  try {
    const data = await storage.createFile(
      process.env.BUCKET_ID,
      ID.unique
      // File data in binary
    );
    await res
      .status(200)
      .json({ message: "File Successfully added!", data: data });
  } catch (err) {
    console.log(err);
    res.status(200).json({ message: "Something went wrong!", err: err });
  }
};
