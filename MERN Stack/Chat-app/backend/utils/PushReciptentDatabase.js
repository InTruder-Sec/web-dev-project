import UsersData from "../models/user.js";

async function PushReciptentArray(ReciverId, SendersId, DocId) {
  let data = await UsersData.findById(ReciverId);
  let details = { userId: SendersId, databaseId: DocId };
  data.chat_history.push(details);
  data.toJSON();
  data.save();
}

export { PushReciptentArray };
