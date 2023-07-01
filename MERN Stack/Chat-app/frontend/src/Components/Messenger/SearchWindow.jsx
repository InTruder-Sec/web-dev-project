import React from "react";
import UserProfile from "./UserProfile";

const SearchWindow = (props) => {
  if (props.searchData.length === 0) {
    return (
      <div className="search--result" style={props.style}>
        <div className="no--users"> No user found</div>
      </div>
    );
  }
  const users = props.searchData.map((data) => {
    return (
      <UserProfile
        setCurrentUserDetails={props.setCurrentUserDetails}
        CurrentUserDetails={props.CurrentUserDetails}
        closeSearchWindow={props.closeSearchWindow}
        username={data.username}
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
