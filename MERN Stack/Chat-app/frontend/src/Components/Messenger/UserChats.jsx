import * as React from "react";
import { ReactSketchCanvas } from "react-sketch-canvas";

import "./UserChats.css";
import send from "./../../images/send.png";
import pen from "./../../images/pen.png";
import { SessionUserDetails, setSessionUserDetails } from "./Messenger";

function UserChats(props) {
  // Logged in user details
  let SessionUser = React.useContext(SessionUserDetails);
  // Reciver user Details
  const [ReciverDetails, setReciverDetails] = React.useState({});

  // Get Chats from databaseId and set Chats
  const [resultChats, setresultChats] = React.useState(<></>);

  const GetChats = async (id) => {
    try {
      const res = await fetch(`http://localhost:5000/users/getchats?id=${id}`);
      const data = await res.json();
      let resChats = await data.data.map(async (e) => {
        const ObjectData = JSON.parse(e);
        console.log(ObjectData.imgLink);
        const image = await fetch(ObjectData.imgLink);
        const imageJson = await image.text();

        if (ObjectData.sendersId === SessionUser.id) {
          return <ReciverChats pngData={imageJson} />;
        } else {
          return <SenderChats pngData={imageJson} />;
        }
      });
      const finalRes = await Promise.all(resChats);
      setresultChats(finalRes);
    } catch (err) {
      console.log("error: " + err);
    }
  };

  const fetchChats = async () => {
    const data = await GetChats(props.databaseId);
  };

  React.useEffect(() => {
    fetchChats();
  }, [props.databaseId]);

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
          chat_history: SessionUser.chat_history,
          ReciverDetails: ReciverDetails,
        }),
      });
      const newData = await res.json();
      // Fetch live chat
    } catch {
      console.log("Something went wrong!");
    }
  };

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
      <div className="chats--space">{resultChats}</div>
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

const SenderChats = ({ pngData }) => {
  return (
    <>
      <div className="s--chat--main">
        <div className="user--logo">A</div>
        <img
          alt="Something went wrong!"
          src={pngData}
          className="user--chat--content"
        ></img>
      </div>
    </>
  );
};

const ReciverChats = ({ pngData }) => {
  return (
    <>
      <div className="s--chat--main reciver">
        <div className="user--logo">A</div>
        <img
          alt="Something went wrong!"
          className="user--chat--content"
          src={pngData}
        ></img>
      </div>
    </>
  );
};
export default UserChats;
