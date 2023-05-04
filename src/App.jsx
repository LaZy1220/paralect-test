import { Route, Routes } from "react-router-dom";
import { Favorites } from "./pages/Favorites/Favorites";
import { Layout } from "./layout/Layout";
import { Home } from "./pages/Home/Home";
import { useState } from "react";
import { Details } from "./pages/Details/Details";
import { MantineProvider } from "@mantine/core";

export const App = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const [industry, setIndustry] = useState("");
  const [salaryFrom, setSalaryFrom] = useState("");
  const [salaryTo, setSalaryTo] = useState("");
  const [search, setSearch] = useState("");

  const [isFiltered, setIsFiltered] = useState(false);
  const [isSearched, setIsSearched] = useState(false);
  return (
    <Layout>
      <MantineProvider
        theme={{
          breakpoints: {
            xs: "30em",
            sm: "48em",
            md: "64em",
            lg: "74em",
            xl: "90em",
          },
        }}
      >
        <Routes>
          <Route
            path="/"
            element={
              <Home
                industry={industry}
                setIndustry={setIndustry}
                salaryFrom={salaryFrom}
                setSalaryFrom={setSalaryFrom}
                salaryTo={salaryTo}
                setSalaryTo={setSalaryTo}
                search={search}
                setSearch={setSearch}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                isFiltered={isFiltered}
                setIsFiltered={setIsFiltered}
                isSearched={isSearched}
                setIsSearched={setIsSearched}
              />
            }
          />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/details/:id" element={<Details />} />
        </Routes>
      </MantineProvider>
    </Layout>
  );
};
