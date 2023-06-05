import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./Components/Login/Login";
import Messenger from "./Components/Messenger/Messenger";

const ToggleTheme = (theme) => {
  if (theme === "false") {
    document.body.style.filter = "invert(0)";
  } else {
    document.body.style.filter = "invert(1)";
  }
};

function App() {
  let theme = getCookie("theme");

  if (theme === "") {
    document.cookie = "theme=false";
  }

  ToggleTheme(theme);

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Main />}></Route>
          <Route path="/messenger" element={<Messenger />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

export default App;
