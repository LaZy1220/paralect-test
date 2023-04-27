import { Route, Routes } from "react-router-dom";
import { Favorites } from "./Favorites/Favorites";
import { Layout } from "./../layout/Layout";
import { Home } from "./Home/Home";
import { useState } from "react";

export const App = () => {
  const [currentPage, setCurrentPage] = useState(1);
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home currentPage={currentPage} />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </Layout>
  );
};
