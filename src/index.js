import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// eslint-disable-next-line
import App from "./App"; // Added above line to avoid warning for 'unused-ref'
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.css";
import Counters from "./components/counters";

ReactDOM.render(
  <React.StrictMode>
    <Counters />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
