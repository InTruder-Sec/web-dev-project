import UsersData from "../models/user.js";

async function PushReciptentArray(
  ReciverId,
  SendersId,
  DocId,
  Sender_username
) {
  let data = await UsersData.findById(ReciverId);
  let details = {
    userId: SendersId,
    username: Sender_username,
    databaseId: DocId,
  };
  data.chat_history.push(details);
  data.toJSON();
  data.save();
}

export { PushReciptentArray };
