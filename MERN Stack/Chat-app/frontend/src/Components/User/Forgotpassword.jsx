import React from "react";
import { useState } from "react";
import logo from "./../../images/logo.png";
import "./Style.css";
import { useNavigate } from "react-router-dom";
import fpVideo from "./../../images/forgotpassword.mp4";
import { ChangeToLogin } from "./Main";

function ForgotPassword(props) {
  const displayNone = {
    display: "none",
  };
  const [invalidStyles, setinvalidStyles] = useState(displayNone);

  const navigate = useNavigate();

  const [loading, setloading] = useState(false);

  const [Email, setEmail] = useState("");
  async function SendOTP() {
    setloading(true);
    try {
      const res = await fetch(
        `http://localhost:5000/users/sendotp?email=${Email}`
      );
      const data = await res.json();
      if (data.code === 200) {
        setloading(false);
        navigate(`/reset?token=${data.id}`);
      } else {
        setloading(false);
        setinvalidStyles({ display: "block" });
      }
    } catch (error) {
      setloading(false);
      console.log(error);
    }
  }
  return (
    <div className="rotate-180">
      <div className="header">
        <img className="logo" alt="logo" src={logo}></img>
        <div className="logo--header">Forgot Password?</div>
      </div>

      <div className="forgot--password">
        <div className="fp--video">
          <video
            className="fp--main--video"
            src={fpVideo}
            autoPlay={true}
            loop
          ></video>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            SendOTP();
          }}
        >
          <div className="padding">
            <label className="label--input">Email: </label>
            <input
              className="input--box"
              value={Email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="johndoe@gmail.com"
            ></input>
          </div>

          <input
            type="submit"
            className="login--btn"
            value={`${loading ? "Loading..." : "Change Password"}`}
            disabled={loading}
          ></input>
        </form>
        <div className="invalidpass" style={invalidStyles}></div>
        <div className="no--account margin--top">Get back to login?</div>

        <input
          type="button"
          className="login--btn padding--left"
          value="Login"
          onClick={(e) => {
            ChangeToLogin(props.setRotate, props.setComponentMain);
          }}
        ></input>
      </div>
    </div>
  );
}

export default ForgotPassword;
