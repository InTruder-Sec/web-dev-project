import React from "react";
import { useState, useEffect } from "react";
import { ReactSketchCanvas } from "react-sketch-canvas";
import Login from "./Login";
import ForgotPassword from "./Forgotpassword";
import CreateAccount from "./CreateAccount";
import "./Style.css";

function Main() {
  const [RotateLogin, setRotate] = useState({ rotate: "0 1 0 0deg" });
  const [ComponentMain, setComponentMain] = useState();
  useEffect(() => {
    setComponentMain(
      <Login setRotate={setRotate} setComponentMain={setComponentMain} />
    );
  }, []);

  // Canvas styles

  const styles = {
    border: "0.0625rem solid #9c9c9c",
    borderRadius: "0.25rem",
    position: "absolute",
    zIndex: 1,
  };

  return (
    <>
      <ReactSketchCanvas
        style={styles}
        width="100vw"
        height="100vh"
        strokeWidth={4}
        strokeColor="black"
        canvasColor="transparent"
      />
      <div className="main">
        <div className="background--head">
          <span className="animate--block scribble--animate">SCRIBBLE</span>
          <span className="animate--block chat--animate">CHAT</span>
        </div>
        <div className="login" style={RotateLogin}>
          {ComponentMain}
        </div>
      </div>
    </>
  );
}

// Function to change window

const ChangeToLogin = (setRotate, setComponentMain) => {
  setRotate({ rotate: "0 1 0 0deg" });
  setComponentMain(
    <Login setRotate={setRotate} setComponentMain={setComponentMain} />
  );
};

const ChangeToForgotPass = (setRotate, setComponentMain) => {
  setRotate({ rotate: "0 1 0 -180deg" });
  setComponentMain(
    <ForgotPassword setRotate={setRotate} setComponentMain={setComponentMain} />
  );
};

const ChangeToCreateAccount = (setRotate, setComponentMain) => {
  setRotate({ rotate: "0 1 0 180deg" });
  setComponentMain(
    <CreateAccount setRotate={setRotate} setComponentMain={setComponentMain} />
  );
};

export default Main;
export { ChangeToLogin, ChangeToForgotPass, ChangeToCreateAccount };
