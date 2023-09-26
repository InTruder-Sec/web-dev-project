import sdk, { ID } from "node-appwrite";
import { PushReciptentArray } from "./PushReciptentDatabase.js";

// Init SDK
const client = new sdk.Client();

const databases = new sdk.Databases(client);

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("64a7ac5899392aecc83b")
  .setKey(process.env.API_KEY);

function PushToAppwrite(DocId, SendersId, URL) {
  const databaseId = process.env.DATABASE_ID;
  const collectionId = process.env.COLLECTION_ID;
  databases.getDocument(databaseId, collectionId, DocId).then((e) => {
    let newData = {
      imgLink: URL,
      sendersId: SendersId,
    };
    console.log("Pushing to appwrite");
    let final = e.History;
    newData = JSON.stringify(newData);
    final.push(newData);
    databases.updateDocument(databaseId, collectionId, DocId, {
      History: final,
    });
  });
}

export { PushToAppwrite };
