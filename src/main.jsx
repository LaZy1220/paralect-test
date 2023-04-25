import React from "react";
import ReactDOM from "react-dom/client";

import "./index.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { App } from "./pages/App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
