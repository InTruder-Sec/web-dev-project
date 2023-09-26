import UsersData from "../models/user.js";

async function UserHistoryMap(UserHistory, User) {
  let DoesExist = false;
  const data = await UsersData.find({ username: User }).exec();
  let uid = await data;
  UserHistory?.map((e) => {
    if (e.userId === uid[0].id) {
      DoesExist = e.databaseId;
    }
  });
  return DoesExist;
}

export { UserHistoryMap };
