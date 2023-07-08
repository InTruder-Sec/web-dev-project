function UserHistoryMap(UserHistory, Id) {
  const DoesExist = false;
  UserHistory.map((e) => {
    if (e.Id === Id) {
      DoesExist = e.databaseId;
    }
  });
  return DoesExist;
}

export { UserHistoryMap };
