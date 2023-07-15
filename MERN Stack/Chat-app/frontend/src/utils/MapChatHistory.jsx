import UserProfile from "../Components/Messenger/UserProfile";

function MapChatHistory(
  UserSessionDetails,
  setCurrentUserDetails,
  CurrentUserDetails,
  closeSearchWindow,
  setUserChatProfile,
  searchData,
  setsearch
) {
  return UserSessionDetails.chat_history.map((e) => {
    return (
      <UserProfile
        setCurrentUserDetails={setCurrentUserDetails}
        CurrentUserDetails={CurrentUserDetails}
        closeSearchWindow={closeSearchWindow}
        username={e.username}
        setsearch={setsearch}
        searchData={searchData}
        setUserChatProfile={setUserChatProfile}
      />
    );
  });
}

export { MapChatHistory };
