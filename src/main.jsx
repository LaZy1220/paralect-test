import React from "react";
import ReactDOM from "react-dom/client";

import "./index.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Favorites } from "./pages/Favorites/Favorites";
import { Layout } from "./layout/Layout";
import { Home } from "./pages/Home/Home";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </Layout>
  </BrowserRouter>
);
