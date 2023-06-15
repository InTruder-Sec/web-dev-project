import * as React from "react";
import { ReactSketchCanvas } from "react-sketch-canvas";

import "./UserChats.css";
import send from "./../../images/send.png";
import pen from "./../../images/pen.png";

function UserChats() {
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

  const SVGhandler = () => {
    sketchRef.current.exportSvg().then((data) => {
      console.log(data);
      // trigger socket.io
      // trigger database to save messeages
    });
  };

  return (
    <div className="userchats">
      <div className="user--profile--chats">
        <div className="user--logo">A</div>
        <div className="user--information padding--left">
          <div className="limitlength user--name">Deep Dhakate</div>
          <div className="limitlength user--email">Active 3hrs ago</div>
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
        <div className="send">
          <img
            className="send--img"
            alt="send"
            onClick={SVGhandler}
            src={send}
          ></img>
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
