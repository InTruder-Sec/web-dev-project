import sdk, { ID } from "node-appwrite";
import { PushReciptentArray } from "./PushReciptentDatabase.js";

// Init SDK
const client = new sdk.Client();

const databases = new sdk.Databases(client);

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("64a7ac5899392aecc83b")
  .setKey(process.env.API_KEY);

async function CreateNewChat(R_ID, S_ID) {
  const NewUnique = ID.unique();
  try {
    databases
      .createDocument(
        process.env.DATABASE_ID,
        process.env.COLLECTION_ID,
        NewUnique,
        { History: [] }
      )
      .then((e) => {
        PushReciptentArray(R_ID, S_ID, e.$id);
        PushReciptentArray(S_ID, R_ID, e.$id);
      });
  } catch (error) {
    console.log(Error);
  }
}

export { CreateNewChat };
