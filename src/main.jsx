import React from "react";
import ReactDOM from "react-dom/client";
import { Home } from "./pages/Home/Home";
import "./index.scss";
import { Header } from "./components/Header/Header.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Favorites } from "./pages/Favorites/Favorites";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
