import React, { useState } from "react";
import { ReactSketchCanvas } from "react-sketch-canvas";
import logo from "./../../images/logo.png";
import "./Style.css";
import { useNavigate } from "react-router-dom";

function ResetPass(props) {
  let otp;
  const navigate = useNavigate();
  const styles = {
    border: "0.0625rem solid #9c9c9c",
    borderRadius: "0.25rem",
    position: "absolute",
    zIndex: 1,
    opacity: 0.5,
  };
  const displayNone = {
    display: "none",
  };
  const [invalidStyles, setinvalidStyles] = useState(displayNone);

  const verifyNum = (key) => {
    let otp1 = document.querySelector(".otp1");
    let otp2 = document.querySelector(".otp2");
    let otp3 = document.querySelector(".otp3");
    let otp4 = document.querySelector(".otp4");
    let btn = document.querySelector(".submit--btn");
    otp = otp1.value + otp2.value + otp3.value + otp4.value;
    let pass = document.querySelector(".input--box");

    if (key === "Backspace") {
      if (otp4.value.length === 0) {
        otp3.focus();
        otp = otp1.value + otp2.value + otp3.value + otp4.value;
      }
      if (otp3.value.length === 0) {
        otp2.focus();
        otp = otp1.value + otp2.value + otp3.value + otp4.value;
      }
      if (otp2.value.length === 0) {
        otp1.focus();
        otp = otp1.value + otp2.value + otp3.value + otp4.value;
      }
    }

    if (otp1.value.length === 1) {
      otp2.focus();
      otp = otp1.value + otp2.value + otp3.value + otp4.value;
    }
    if (otp2.value.length === 1) {
      otp3.focus();
      otp = otp1.value + otp2.value + otp3.value + otp4.value;
    }
    if (otp3.value.length === 1) {
      otp4.focus();
      otp = otp1.value + otp2.value + otp3.value + otp4.value;
    }
    if (otp4.value.length === 1) {
      otp4.blur();
      btn.disabled = false;
    }

    if (
      otp1.value.length === 1 &&
      otp2.value.length === 1 &&
      otp3.value.length === 1 &&
      otp4.value.length === 1
    ) {
      btn.disabled = false;
      pass.focus();
    }
  };

  const verifyOTP = async () => {
    var token = window.location.search;
    let otp1 = document.querySelector(".otp1");
    let otp2 = document.querySelector(".otp2");
    let otp3 = document.querySelector(".otp3");
    let otp4 = document.querySelector(".otp4");
    otp = otp1.value + otp2.value + otp3.value + otp4.value;
    token = token.substring(1);
    token = token.split("=")[1];
    try {
      const response = await fetch(
        `http://localhost:5000/users/verifyOTP?otp=${otp}&token=${token}&pass=${password}`
      );
      const data = await response.json();
      console.log(data);
      if (data.code === 200) {
        navigate(`/`);
      } else {
        setinvalidStyles({ display: "block" });
      }
    } catch (err) {
      console.log("Error: " + err);
    }
  };

  const [password, setpassword] = useState("");

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

            <form
              onSubmit={(e) => {
                e.preventDefault();
                verifyOTP();
              }}
            >
              <div className="major--input">
                <div className="no--account margin--top p--d mt--top--6">
                  Enter the OTP sent to your email
                </div>
                <div className="boxes">
                  <input
                    onChange={(e) => {
                      verifyNum(e);
                    }}
                    className="otp otp1"
                    type="number"
                    min="0"
                    max="9"
                    placeholder="-"
                    required
                  />
                  <input
                    onChange={(e) => {
                      verifyNum(e);
                    }}
                    className="otp otp2"
                    type="number"
                    min={0}
                    max={9}
                    placeholder="-"
                    required
                  />
                  <input
                    onChange={(e) => {
                      verifyNum(e);
                    }}
                    className="otp otp3"
                    type="number"
                    min="0"
                    max="9"
                    placeholder="-"
                    required
                  />
                  <input
                    onChange={(e) => {
                      verifyNum(e);
                    }}
                    className="otp otp4"
                    type="number"
                    min="0"
                    max="9"
                    placeholder="-"
                    required
                  />
                </div>
              </div>
              <div className="padding">
                <label className="label--input">New Password: </label>
                <input
                  className="input--box"
                  type="password"
                  required
                  placeholder="********"
                  value={password}
                  onChange={(e) => {
                    setpassword(e.target.value);
                  }}
                ></input>
              </div>
              <button
                className="submit--btn login--btn"
                type="submit"
                disabled={true}
              >
                Submit
              </button>
            </form>
            <div className="invalidpass" style={invalidStyles}>
              Invalid OTP!
            </div>
            <div className="no--account margin--top p--d">
              Get back to login?
            </div>

            <input
              type="button"
              className="login--btn"
              value="Login"
              onClick={(e) => {
                navigate("/");
              }}
            ></input>
          </div>
        </div>
      </>
    </div>
  );
}

export default ResetPass;
