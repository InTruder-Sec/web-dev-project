import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import Authenticate from "./components/Authenticate";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/auth" element={<Authenticate />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  rootElement
);
