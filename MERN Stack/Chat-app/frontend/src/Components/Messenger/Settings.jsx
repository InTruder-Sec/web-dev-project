import React from "react";
import Box from "@mui/material/Box";
import { ToggleTheme } from "../../App";
import Modal from "@mui/material/Modal";
import "./settings.css";
import { useNavigate } from "react-router-dom";

function Settings(props) {
  console.log(props);
  const navigate = useNavigate();
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  // Logout function remove cookie and redirect to login page
  const Logout = async () => {
    try {
      await fetch("http://localhost:5000/users/logout", {
        method: "GET",
        credentials: "include",
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Modal
        open={props.open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
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
                  onClick={() => {
                    props.setOpen(false);
                  }}
                >
                  Save
                </button>
              </div>
              <div className="save--btn rm--margin">
                <button className="save btns" onClick={Logout}>
                  Logout
                </button>
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default Settings;
