import UsersData from "../models/user.js";

async function PushReciptentArray(ReciverId, SendersId, DocId) {
  console.log(DocId);
  let data = await UsersData.findById(ReciverId);
  let details = { userId: SendersId, databaseId: DocId };

  let newDetails = JSON.stringify(details);
  data.chat_history = data.chat_history.push(newDetails);
  data.toJSON();
  data.save();
  console.log(newDetails);
}

export { PushReciptentArray };
