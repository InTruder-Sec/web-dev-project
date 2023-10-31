import { ReactSketchCanvas } from "react-sketch-canvas";
import "./UserChats.css";
import send from "./../../images/send.png";
import { UserDetailsGlobal, setCurrentUserDetailsGlobal } from "./Messenger";
import { useContext, useEffect, useRef, useState } from "react";
import { SvgUpload } from "../../Utils/SendChats";
import GetChats from "../../Utils/GetChats";
import { ReciverChats, SenderChats } from "./ChatDesigns";

function UserChats(props) {
  // Logged in user details
  let SessionUser = useContext(UserDetailsGlobal);

  // Reciver user Details
  let CurrentUserDetails = useContext(setCurrentUserDetailsGlobal);
  const [ReciverDetails, setReciverDetails] = useState({});

  // Get Chats from databaseId and set Chats
  const [resultChats, setresultChats] = useState(<></>);

  useEffect(() => {
    const fetchChats = async () => {
      console.log("Rendered");
      await GetChats(props.databaseId, setresultChats, SessionUser);
      var elem = document.getElementById("chat--container");
      elem.scrollIntoView({ behavior: "smooth" });
      elem.scrollTop = elem.scrollHeight;
    };
    fetchChats();
  }, [props.databaseId, SessionUser]);

  useEffect(() => {
    setReciverDetails({
      id: props.id,
      username: props.username,
    });
  }, [props]);

  // Canvas settings
  const styles = {
    zIndex: 4,
  };

  const sketchRef = useRef(null);

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
      SvgUpload(data, SessionUser, ReciverDetails).then(async (e) => {
        e.json().then(async (data) => {
          const image = await fetch(data.ImageUrl);
          const imageJson = await image.text();
          const newChat = <ReciverChats pngData={imageJson} />;
          setresultChats((prev) => {
            return [...prev, newChat];
          });
          sketchRef.current.clearCanvas();
          var elem = document.getElementById("chat--container");
          elem.scrollTop = elem.scrollHeight;
          elem.scrollIntoView({ behavior: "smooth" });
        });
      });
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
      <div className="chats--space" id="chat--container">
        {resultChats}
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

export default UserChats;
