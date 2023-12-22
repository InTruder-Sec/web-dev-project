// import UserProfile from "../Components/Messenger/UserProfile";
import { useContext } from "react";
import { UserDetailsGlobal } from "../Components/Messenger/Messenger";
import UserProfile from "../Components/Messenger/UserProfile";

function MapChatHistory(
  setSearchWindow,
  setUserChatProfile,
  searchData,
  setsearch
) {
  let UserSessionDetails = useContext(UserDetailsGlobal);
  return UserSessionDetails.chat_history.map((e) => {
    return (
      <UserProfile
        setSearchWindow={setSearchWindow}
        databaseId={e.databaseId}
        username={e.username}
        setsearch={setsearch}
        searchData={searchData}
        setUserChatProfile={setUserChatProfile}
        id={e.id}
        lastActive={e.lastActive}
      />
    );
  });
}

export { MapChatHistory };
