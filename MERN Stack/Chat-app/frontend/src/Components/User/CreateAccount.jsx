import React from "react";
import { useState } from "react";
import logo from "./../../images/logo.png";
import "./Style.css";
import { ChangeToLogin } from "./Main";

function CreateAccount(props) {
  const displayNone = {
    display: "none",
  };

  const [invalidStyles, setinvalidStyles] = useState(displayNone);
  const [ErrState, setErrState] = useState("Something went wrong");
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [email, setemail] = useState("");

  async function CreateNewUser() {
    const res = await fetch("http://localhost:5000/users/create", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({ email, username, password }),
    });
    try {
      const data = await res.json();
      console.log(data);
      if (data.code === 11000) {
        if (data.keyValue.username === username) {
          setErrState(`${username} is already used!`);
          setinvalidStyles({ display: "block" });
        } else if (data.keyValue.email === email) {
          setErrState(`${email} is already used!`);
          setinvalidStyles({ display: "block" });
        } else {
          setErrState(`${data.keyValue} already in use!`);
          setinvalidStyles({ display: "block" });
        }
      } else if (data.code === 200) {
        ChangeToLogin(props.setRotate, props.setComponentMain);
      } else {
        setErrState("Something went wrong!");
        setinvalidStyles({ display: "block" });
      }
    } catch (err) {
      console.log(err);
      setinvalidStyles({ display: "block" });
    }
  }

  return (
    <div className="create--account">
      <div className="header">
        <img className="logo" alt="logo" src={logo}></img>
        <div className="logo--header">Create account</div>
      </div>
      <div className="login--main remove--margin">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            CreateNewUser();
          }}
        >
          <div className="padding">
            <label className="label--input">Email: </label>
            <input
              className="input--box"
              placeholder="johndoe@gmail.com"
              value={email}
              required
              type="email"
              onChange={(e) => {
                setemail(e.target.value);
              }}
            ></input>
          </div>
          <div className="padding">
            <label className="label--input">Username: </label>
            <input
              className="input--box"
              placeholder="username"
              value={username}
              required
              onChange={(e) => {
                setusername(e.target.value);
              }}
            ></input>
          </div>
          <div className="padding">
            <label className="label--input">Password: </label>
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

          <div className="padding">
            <input
              type="submit"
              className="login--btn"
              value="Create Account"
            ></input>
          </div>
          <div className="padding"></div>
          <div className="invalidpass" style={invalidStyles}>
            {ErrState}
          </div>

          <div className="no--account margin--top">
            Already have an account?
          </div>
          <input
            type="button"
            className="login--btn remove--margin"
            value="Login"
            onClick={(e) => {
              ChangeToLogin(props.setRotate, props.setComponentMain);
            }}
          ></input>
        </form>
      </div>
    </div>
  );
}

export default CreateAccount;
