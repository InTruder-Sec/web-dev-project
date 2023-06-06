import React, { useState } from "react";
import { ReactSketchCanvas } from "react-sketch-canvas";

import logo from "./../../images/logo.png";
import "./messenger.css";
import Settings from "./Settings";
import UserChats from "./UserChats";

function Messenger() {
  const styles = {
    position: "absolute",
    zIndex: 1,
  };
  const CloseModalStyles = { display: "none", zIndex: "-1" };
  const OpenModalStyles = { display: "block", zIndex: "10" };
  const [ModalStyle, setModalStyle] = useState(CloseModalStyles);

  function modalOpen() {
    setModalStyle(OpenModalStyles);
  }

  return (
    <div className="messenger">
      <div className="settings--div" style={ModalStyle}>
        <Settings
          ModalStyle={ModalStyle}
          setModalStyle={setModalStyle}
          CloseModalStyles={CloseModalStyles}
        />
      </div>

      <div className="dashboard">
        <div className="m--header">
          <img className="m-header--logo" alt="logo" src={logo}></img>
          <div className="m-header--title">SCRIBBLE CHAT</div>
        </div>
        <div className="search--box">
          <input className="search" placeholder="Search"></input>
        </div>
        <div className="chat--profiles">
          <UserProfile />
          <UserProfile />
          <UserProfile />
          <UserProfile />
          <UserProfile />
          <UserProfile />
          <UserProfile />
          <UserProfile />
          <UserProfile />
          <UserProfile />
          <UserProfile />
        </div>
        <hr className="endline" />
        <div className="user--profile">
          <div className="user--logo">A</div>
          <div className="user--information">
            <div className="limitlength user--name">Deep Dhakate</div>
            <div className="limitlength user--email">
              dhakatedeep14@gmail.com
            </div>
          </div>
          <div
            className="options"
            onClick={(e) => {
              modalOpen();
            }}
          >
            <svg
              fill="#000000"
              width="35px"
              height="35px"
              viewBox="0 0 32 32"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path d="M28.106 19.944h-0.85c-0.069-0.019-0.131-0.050-0.2-0.063-1.788-0.275-3.2-1.762-3.319-3.506-0.137-1.95 0.975-3.6 2.787-4.137 0.238-0.069 0.488-0.119 0.731-0.181h0.85c0.056 0.019 0.106 0.050 0.169 0.056 1.65 0.269 2.906 1.456 3.262 3.081 0.025 0.125 0.063 0.25 0.094 0.375v0.85c-0.019 0.056-0.050 0.113-0.056 0.169-0.262 1.625-1.419 2.863-3.025 3.238-0.156 0.038-0.3 0.081-0.444 0.119zM4.081 12.056l0.85 0c0.069 0.019 0.131 0.050 0.2 0.056 1.8 0.281 3.206 1.775 3.319 3.537 0.125 1.944-1 3.588-2.819 4.119-0.231 0.069-0.469 0.119-0.7 0.175h-0.85c-0.056-0.019-0.106-0.050-0.162-0.063-1.625-0.3-2.688-1.244-3.194-2.819-0.069-0.206-0.106-0.425-0.162-0.637v-0.85c0.019-0.056 0.050-0.113 0.056-0.169 0.269-1.631 1.419-2.863 3.025-3.238 0.15-0.037 0.294-0.075 0.437-0.113zM15.669 12.056h0.85c0.069 0.019 0.131 0.050 0.2 0.063 1.794 0.281 3.238 1.831 3.313 3.581 0.087 1.969-1.1 3.637-2.931 4.106-0.194 0.050-0.387 0.094-0.581 0.137h-0.85c-0.069-0.019-0.131-0.050-0.2-0.063-1.794-0.275-3.238-1.831-3.319-3.581-0.094-1.969 1.1-3.637 2.931-4.106 0.2-0.050 0.394-0.094 0.588-0.137z"></path>{" "}
              </g>
            </svg>
          </div>
        </div>
      </div>
      <div className="message">
        <div className="message--layout">
          <UserChats />
          {/* <LandingPage styles={styles} /> */}
        </div>
      </div>
    </div>
  );
}

const LandingPage = (props) => {
  return (
    <>
      <ReactSketchCanvas
        style={props.styles}
        width="100%"
        height="100%"
        strokeWidth={5}
        strokeColor="black"
        canvasColor="white"
      />
      <WelcomePage />
    </>
  );
};

const WelcomePage = () => {
  return (
    <div className="welcome">
      <h1>Welcome to Scribble Chat!</h1>
      <h3>Chat with Your Friends, Privately and Securely.</h3>
      <summary>
        Scribble Chat is a unique messaging application that puts your privacy
        first. Our platform ensures that your conversations are confidential,
        without compromising on user experience. With Scribble Chat, you can
        connect with your friends in real-time, using a peer-to-peer connection
        that doesn't store any data on a centralized database.
      </summary>
    </div>
  );
};

const UserProfile = () => {
  return (
    <div className="profile">
      <div className="user--logo">A</div>
      <div className="user--information">
        <div className="limitlength user--name">Deep Dhakate</div>
        <div className="limitlength user--email">Active 3hrs ago </div>
      </div>
    </div>
  );
};

export default Messenger;
