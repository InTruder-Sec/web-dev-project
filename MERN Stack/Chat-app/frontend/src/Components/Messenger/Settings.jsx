import React from "react";
import Box from "@mui/material/Box";
import { ToggleTheme } from "../../App";
import Modal from "@mui/material/Modal";
import "./settings.css";

function Settings(props) {
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

  return (
    <div>
      <Modal
        open={props.open}
        onClose={props.handleClose}
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
              <div className="save--btn"></div>
            </div>
          </div>
          {/* <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography> */}
        </Box>
      </Modal>
    </div>
  );
}

export default Settings;
