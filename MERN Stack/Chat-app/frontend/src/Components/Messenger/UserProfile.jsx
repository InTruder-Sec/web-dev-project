import React, { useContext } from "react";

import UserChats from "./UserChats";
import { setCurrentUserDetailsGlobal } from "./Messenger";

const UserProfile = (props) => {
  const setCurrentUserDetails = useContext(setCurrentUserDetailsGlobal);
  return (
    <div
      className="profile"
      onClick={(e) => {
        setCurrentUserDetails({
          username: props.username,
          id: props.id,
          lastActive: props.lastActive,
          databaseId: props.databaseId,
        });
        props.setsearch("");
        props.setSearchWindow(false);
        props.setUserChatProfile(
          <UserChats
            username={props.username}
            id={props.id}
            lastActive={props.lastActive}
            databaseId={props.databaseId}
            setUserChatProfile={props.setUserChatProfile}
            setCurrentUserDetails={setCurrentUserDetails}
            key={props.username}
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
