import { Favorites } from "./Favorites/Favorites";
import { Layout } from "../layout/Layout";
import { Home } from "./Home/Home";
import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAllVacancies } from "../services/getAllVacancies";

export const App = () => {
  const [vacancies, setVacancies] = useState([]);
  useEffect(() => {
    getAllVacancies();
  }, []);
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </Layout>
  );
};
