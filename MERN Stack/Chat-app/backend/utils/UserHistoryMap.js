function UserHistoryMap(UserHistory, Id) {
  const DoesExist = false;
  console.log(UserHistory);
  UserHistory?.map((e) => {
    if (e === Id) {
      DoesExist = e.databaseId;
    }
  });
  return DoesExist;
}

export { UserHistoryMap };
