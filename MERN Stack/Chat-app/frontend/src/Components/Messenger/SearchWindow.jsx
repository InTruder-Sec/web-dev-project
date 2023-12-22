import React from "react";
import { UserDetailsGlobal } from "./Messenger";
import UserProfile from "./UserProfile";

const SearchWindow = (props) => {
  const UserDetails = React.useContext(UserDetailsGlobal);
  if (props.searchData.length === 0) {
    return (
      <div className="search--result" style={props.style}>
        <div className="no--users"> No user found</div>
      </div>
    );
  }

  const users = props.searchData.map((data) => {
    if (data.username === UserDetails.username) return null;
    return (
      <UserProfile
        id={data?.id}
        setSearchWindow={props.setSearchWindow}
        username={data.username}
        databaseId={null}
        setsearch={props.setsearch}
        lastActive={data.updated_at}
        ChatProfile={props.ChatProfile}
        setUserChatProfile={props.setUserChatProfile}
        key={data.username}
      />
    );
  });
  return (
    <div className="search--result" id="search--window" style={props.style}>
      {users}
    </div>
  );
};

export default SearchWindow;
