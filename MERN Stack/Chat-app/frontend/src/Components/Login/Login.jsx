import React from "react";
import "./Login.css";
import logo from "./../../images/logo.png";

function Login() {
  return (
    <div className="main">
      <div className="login">
        <img className="logo" alt="logo" src={logo}></img>
        <div className="login--main">
          <form>
            <label className="label--input">Username: </label>
            <input className="input--box" placeholder="username"></input>
            <label className="label--input">Password: </label>
            <input
              className="input--box"
              type="password"
              placeholder="********"
            ></input>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
