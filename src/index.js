import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "./components/App";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider>
    <App />
  </Provider>
);
