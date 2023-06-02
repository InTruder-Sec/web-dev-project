import React from "react";
import "./Login.css";
import logo from "./../../images/logo.png";

function Login() {
  return (
    <div className="main">
      <div className="login">
        <div className="header">
          <img className="logo" alt="logo" src={logo}></img>
          <div className="logo--header">Login</div>
        </div>
        <div className="login--main">
          <form>
            <div className="padding">
              <label className="label--input">Username: </label>
              <input className="input--box" placeholder="username"></input>
            </div>
            <div className="padding">
              <label className="label--input">Password: </label>
              <input
                className="input--box"
                type="password"
                placeholder="********"
              ></input>
            </div>
            <div className="forgot--div">
              <div className="forgot">forgot password?</div>
            </div>
            <div className="padding">
              <input type="button" className="login--btn" value="Login"></input>
            </div>
          </form>
          <div className="oauth">
            <div className="oauth--icon"></div>
            <div className="oauth--icon"></div>
            <div className="oauth--icon"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
