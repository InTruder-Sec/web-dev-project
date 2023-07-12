function UserHistoryMap(UserHistory, Id) {
  let DoesExist = false;
  UserHistory?.map((e) => {
    if (e.userId === Id) {
      DoesExist = e.databaseId;
    }
  });
  return DoesExist;
}

export { UserHistoryMap };
