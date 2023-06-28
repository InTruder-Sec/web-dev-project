import React from "react";
import "./popup.css";

function Popup(props) {
  const position = {
    "margin-top": props.position.mt,
    "margin-left": props.position.ml,
  };

  function handelClose() {
    props.setwalkthrough("");
  }

  return (
    <div className="popup--cover">
      <div className="popup" style={position}>
        <div className="border--top"></div>
        <div className="popup__header">{props.content}</div>
      </div>
      <div className="close--popup" onClick={handelClose}>
        OK
      </div>
    </div>
  );
}

export default Popup;
