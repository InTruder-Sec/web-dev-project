import React from "react";
import { ReactSketchCanvas } from "react-sketch-canvas";

import "./UserChats.css";
import send from "./../../images/send.png";

function UserChats() {
  const styles = {
    zIndex: 4,
  };

  return (
    <div className="userchats">
      <div className="user--profile--chats">
        <div className="user--logo">A</div>
        <div className="user--information padding--left">
          <div className="limitlength user--name">Deep Dhakate</div>
          <div className="limitlength user--email">Active 3hrs ago</div>
        </div>
      </div>
      <div className="chats--space">
        <SenderChats />
        <SenderChats />
        <SenderChats />
        <ReciverChats />
        <SenderChats />
        <ReciverChats />
        <SenderChats />
        <ReciverChats />
        <SenderChats />
        <ReciverChats />
        <SenderChats />
        <ReciverChats />
        <SenderChats />
        <ReciverChats />
        <SenderChats />
        <ReciverChats />
        <SenderChats />
        <ReciverChats />
        <SenderChats />
        <ReciverChats />
        <ReciverChats />
      </div>
      <div className="chat--tools">
        <div className="scribble--pad--tools">
          <ReactSketchCanvas
            style={styles}
            width="100%"
            height="100%"
            strokeWidth={4}
            strokeColor="black"
            canvasColor="white"
          />
        </div>
        <div className="tools">
          <div className="tools--btn pen">Pen</div>
          <div className="tools--btn eraser">Eraser</div>
          <div className="tools--btn clearall">Clear All</div>
          <div className="tools--btn redo">Redo</div>
          <div className="tools--btn undo">Undo</div>
        </div>
        <div className="send">
          <img className="send--img" alt="send" src={send}></img>
        </div>
      </div>
    </div>
  );
}

const SenderChats = () => {
  return (
    <>
      <div className="s--chat--main">
        <div className="user--logo">A</div>
        <div className="user--chat--content"></div>
      </div>
    </>
  );
};

const ReciverChats = () => {
  return (
    <>
      <div className="s--chat--main reciver">
        <div className="user--logo">A</div>
        <div className="user--chat--content"></div>
      </div>
    </>
  );
};
export default UserChats;
