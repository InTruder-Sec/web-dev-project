import sdk, { ID } from "node-appwrite";

// Init SDK
const client = new sdk.Client();

const databases = new sdk.Databases(client);

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("64a7ac5899392aecc83b")
  .setKey(process.env.API_KEY);

async function CreateNewChat() {
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
        return e.$id;
      });
    // return NewUnique;
  } catch (error) {
    console.log(Error);
  }
}

export { CreateNewChat };
