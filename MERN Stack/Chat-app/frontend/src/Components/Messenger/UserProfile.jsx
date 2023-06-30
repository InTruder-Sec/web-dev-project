import React from "react";
import UserChats from "./UserChats";

const UserProfile = (props) => {
  console.log(props);
  return (
    <div
      className="profile"
      onClick={(e) => {
        props.setCurrentUserDetails({
          username: props.username,
        });
        props.closeSearchWindow();
        props.setUserChatProfile(<UserChats username={props.username} />);
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
