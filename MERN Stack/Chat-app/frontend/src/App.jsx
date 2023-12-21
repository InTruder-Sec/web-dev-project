import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Messenger from "./Components/Messenger/Messenger";
import Main from "./Components/User/Main";
import ResetPass from "./Components/User/ResetPass";

// App theme
const ToggleTheme = (theme) => {
  if (theme === "false") {
    document.body.style.filter = "invert(0)";
  } else {
    document.body.style.filter = "invert(1)";
  }
};

function App() {
  // Toggle theme
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
          <Route path="/reset" element={<ResetPass />}></Route>
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
export { ToggleTheme };
