import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./Components/Login/Login";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Main />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
