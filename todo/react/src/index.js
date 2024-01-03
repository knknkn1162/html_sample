import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

// <App />で戻り値がレンダリングされる
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);