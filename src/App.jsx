import { Route, Routes } from "react-router-dom";
import { Favorites } from "./pages/Favorites/Favorites";
import { Layout } from "./layout/Layout";
import { Home } from "./pages/Home/Home";
import { useState } from "react";
import { Details } from "./pages/Details/Details";

export const App = () => {
  const [currentPage, setCurrentPage] = useState(1);
  return (
    <Layout>
      <Routes>
        <Route
          path="/"
          element={
            <Home currentPage={currentPage} setCurrentPage={setCurrentPage} />
          }
        />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </Layout>
  );
};
