import React from "react";
import { ReactSketchCanvas } from "react-sketch-canvas";
import logo from "./../../images/logo.png";
import "./Login.css";

function ResetPass() {
  const styles = {
    border: "0.0625rem solid #9c9c9c",
    borderRadius: "0.25rem",
    position: "absolute",
    zIndex: 1,
    opacity: 0.5,
  };

  return (
    <div>
      <>
        <ReactSketchCanvas
          style={styles}
          width="100vw"
          height="100vh"
          strokeWidth={4}
          strokeColor="black"
          canvasColor="white"
        />
        <div className="main">
          <div className="background--head">
            <span className="animate--block scribble--animate">SCRIBBLE</span>
            <span className="animate--block chat--animate">CHAT</span>
          </div>
          <div className="login">
            <div className="header">
              <img className="logo" alt="logo" src={logo}></img>
              <div className="logo--header">Login</div>
            </div>
            <div className="major--input">
              <div className="boxes">
                <div className="box box1"></div>
                <div className="box box2"></div>
                <div className="box box3"></div>
                <div className="box box4"></div>
              </div>
              <input className="reset--input" placeholder="- - - -"></input>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}

export default ResetPass;
