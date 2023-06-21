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

  const verifyNum = () => {
    let otp1 = document.querySelector(".otp1");
    let otp2 = document.querySelector(".otp2");
    let otp3 = document.querySelector(".otp3");
    let otp4 = document.querySelector(".otp4");

    if (otp1.value.length === 1) {
      otp2.focus();
    }
    if (otp2.value.length === 1) {
      otp3.focus();
    }
    if (otp3.value.length === 1) {
      otp4.focus();
    }

    if (
      otp1.value.length === 1 &&
      otp2.value.length === 1 &&
      otp3.value.length === 1 &&
      otp4.value.length === 1
    ) {
      document.querySelector(".submit--btn").disabled = false;
    }
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
              <div className="logo--header">Reset password</div>
            </div>
            <form>
              <div className="major--input">
                <div className="boxes">
                  <input
                    onChange={verifyNum}
                    className="otp otp1"
                    type="number"
                    min="0"
                    max="9"
                    placeholder="-"
                    required
                  />
                  <input
                    onChange={verifyNum}
                    className="otp otp2"
                    type="number"
                    min="0"
                    max="9"
                    placeholder="-"
                    required
                  />
                  <input
                    onChange={verifyNum}
                    className="otp otp3"
                    type="number"
                    min="0"
                    max="9"
                    placeholder="-"
                    required
                  />
                  <input
                    onChange={verifyNum}
                    className="otp otp4"
                    type="number"
                    min="0"
                    max="9"
                    placeholder="-"
                    required
                  />
                </div>
              </div>
              <button
                className="submit--btn login--btn"
                type="submit"
                disabled={true}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </>
    </div>
  );
}

export default ResetPass;
