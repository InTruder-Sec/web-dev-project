// import UserProfile from "../Components/Messenger/UserProfile";
import { useContext } from "react";
import { UserDetailsGlobal } from "../Components/Messenger/Messenger";

function MapChatHistory(
  closeSearchWindow,
  setUserChatProfile,
  searchData,
  setsearch
) {
  let UserSessionDetails = useContext(UserDetailsGlobal);
  return UserSessionDetails.chat_history.map((e) => {
    return (
      <></>
      // <UserProfile
      //   setCurrentUserDetails={setCurrentUserDetails}
      //   CurrentUserDetails={CurrentUserDetails}
      //   closeSearchWindow={closeSearchWindow}
      //   databaseId={e.databaseId}
      //   username={e.username}
      //   setsearch={setsearch}
      //   searchData={searchData}
      //   setUserChatProfile={setUserChatProfile}
      // />
    );
  });
}

export { MapChatHistory };
