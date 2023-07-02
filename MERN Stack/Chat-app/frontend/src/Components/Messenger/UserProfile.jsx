import React from "react";

import UserChats from "./UserChats";

const UserProfile = (props) => {
  return (
    <div
      className="profile"
      onClick={(e) => {
        props.setCurrentUserDetails({
          username: props.username,
          id: props.id,
          lastActive: props.lastActive,
        });
        props.setsearch("");
        props.closeSearchWindow();
        props.setUserChatProfile(
          <UserChats
            username={props.username}
            socket={props.socket}
            id={props.id}
            CurrentSession={props.CurrentSession}
          />
        );
      }}
    >
      <div className="user--logo">{props.username[0].toUpperCase()}</div>
      <div className="user--information">
        <div className="limitlength user--name">{props.username}</div>
        <div className="limitlength user--email">{props.lastActive} </div>
      </div>
    </div>
  );
};

export default UserProfile;
