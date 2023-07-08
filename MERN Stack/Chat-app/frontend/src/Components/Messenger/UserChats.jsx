import * as React from "react";
import { ReactSketchCanvas } from "react-sketch-canvas";

import "./UserChats.css";
import send from "./../../images/send.png";
import pen from "./../../images/pen.png";
import { SessionUserDetails } from "./Messenger";

function UserChats(props) {
  // Logged in user details
  const SessionUser = React.useContext(SessionUserDetails);
  // Reciver user Details
  const [ReciverDetails, setReciverDetails] = React.useState({});

  React.useEffect(() => {
    setReciverDetails({
      id: props.id,
      username: props.username,
    });
  }, [props.id, props.username]);

  // Upload SVG to Database

  const SvgUpload = async (data) => {
    try {
      const res = await fetch("http://localhost:5000/users/sendChat", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          svg: data,
          SessionUser: SessionUser,
          ReciverDetails: ReciverDetails,
        }),
      });
      const newData = await res.json();
      console.log(newData);
    } catch {
      console.log("Something went wrong!");
    }
  };

  const socket = props.socket;
  const styles = {
    zIndex: 4,
    cursor: `url(${pen}), auto`,
  };

  const sketchRef = React.useRef(null);

  const ClearHandler = () => {
    sketchRef.current.clearCanvas();
  };

  const UndoHandler = () => {
    sketchRef.current.undo();
  };

  const RedoHandler = () => {
    sketchRef.current.redo();
  };

  const EraserHandler = (status) => {
    sketchRef.current.eraseMode(status);
  };

  function SVGhandler() {
    sketchRef.current.exportImage("png").then((data) => {
      // trigger socket.io
      socket.current.emit("send-message", {
        to: props.id,
        from: SessionUser.id,
        message: data,
      });

      // trigger database to save messeages

      SvgUpload(data);
    });
  }

  return (
    <div className="userchats">
      <div className="user--profile--chats">
        <div className="user--logo">{props.username[0].toUpperCase()}</div>
        <div className="user--information padding--left">
          <div className="limitlength user--name">{props.username}</div>
          <div className="limitlength user--email">{props.lastActive}</div>
        </div>
      </div>
      <div className="chats--space">
        <ReciverChats />

        <SenderChats />
        <SenderChats />
        <ReciverChats />
      </div>
      <div className="chat--tools">
        <div className="scribble--pad--tools">
          <ReactSketchCanvas
            ref={sketchRef}
            style={styles}
            width="100%"
            height="100%"
            strokeWidth={4}
            strokeColor="black"
            canvasColor="white"
          />
        </div>
        <div className="tools">
          <div
            className="tools--btn pen"
            onClick={(e) => {
              EraserHandler(false);
            }}
          >
            Pen
          </div>
          <div
            className="tools--btn eraser"
            onClick={(e) => {
              EraserHandler(true);
            }}
          >
            Eraser
          </div>
          <div className="tools--btn clearall" onClick={ClearHandler}>
            Clear All
          </div>
          <div className="tools--btn redo" onClick={RedoHandler}>
            Redo
          </div>
          <div className="tools--btn undo" onClick={UndoHandler}>
            Undo
          </div>
        </div>
        <div className="send" onClick={SVGhandler}>
          <img className="send--img" alt="send" src={send}></img>
        </div>
      </div>
    </div>
  );
}

const SenderChats = () => {
  return (
    <>
      <div className="s--chat--main">
        <div className="user--logo">A</div>
        <div className="user--chat--content"></div>
      </div>
    </>
  );
};

const ReciverChats = () => {
  return (
    <>
      <div className="s--chat--main reciver">
        <div className="user--logo">A</div>
        <div className="user--chat--content"></div>
      </div>
    </>
  );
};
export default UserChats;
