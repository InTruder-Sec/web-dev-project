import React from "react";
import { ToggleTheme } from "../../App";
import "./settings.css";

function Settings(props) {
  const modalClose = () => {
    props.setModalStyle(props.CloseModalStyles);
  };

  return (
    <div className="settings">
      <div className="s--title">User Profile</div>
      <div className="s--userdetails">
        <div className="s--photo">
          <div className="user--logo">A</div>
        </div>
        <div className="s--user">
          <div className="s--username">
            <label className="label--input s--label">Username: </label>
            <input
              className="s--input--user"
              placeholder="Deep Dhakate"
            ></input>
          </div>
          <div className="s--useremail">
            <label className="label--input s--label">Email: </label>
            <div className="s--input--user">dhakatedeep14@gmail.com</div>
          </div>
          <div className="theme s--useremail">
            <label className="label--input s--label">Theme: </label>
          </div>
          <div className="theme--btns">
            <button
              className="theme-light btns"
              onClick={(e) => {
                ToggleTheme("false");
                document.cookie = "theme=false";
              }}
            >
              Light
            </button>
            <button
              className="theme-dark btns"
              onClick={(e) => {
                document.cookie = "theme=true";
                ToggleTheme("true");
              }}
            >
              Dark
            </button>
          </div>
          <div className="save--btn">
            <button
              className="save btns"
              onClick={(e) => {
                modalClose();
              }}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
