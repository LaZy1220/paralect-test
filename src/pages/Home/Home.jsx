import styles from "./Home.module.scss";
import { Filters } from "../../components/Filters/Filters";
import { Search } from "../../components/Search/Search";
import { useEffect, useState } from "react";
import { getVacancies } from "../../services/getVacancies";
import { VacanciesList } from "../../components/Vacancies/VacanciesList";

export const Home = ({
  industry,
  setIndustry,
  salaryFrom,
  setSalaryFrom,
  salaryTo,
  setSalaryTo,
  search,
  setSearch,
  currentPage,
  setCurrentPage,
  isFiltered,
  setIsFiltered,
  isSearched,
  setIsSearched,
}) => {
  const [vacancies, setVacancies] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getVacancies(
      search,
      salaryFrom,
      salaryTo,
      industry,
      isFiltered,
      isSearched,
      currentPage - 1
    ).then((data) => {
      setVacancies(data);
      setIsLoading(false);
    });
  }, [currentPage]);
  return (
    <main className={styles.home}>
      <div className={styles.wrapper}>
        <div className={styles.flex}>
          <Filters
            setIndustry={setIndustry}
            industry={industry}
            setSalaryFrom={setSalaryFrom}
            salaryFrom={salaryFrom}
            setSalaryTo={setSalaryTo}
            salaryTo={salaryTo}
            search={search}
            setVacancies={setVacancies}
            setIsLoading={setIsLoading}
            setCurrentPage={setCurrentPage}
            setIsFiltered={setIsFiltered}
            isSearched={isSearched}
          />
          <div className={styles["full-width"]}>
            <Search
              search={search}
              setSearch={setSearch}
              industry={industry}
              salaryFrom={salaryFrom}
              salaryTo={salaryTo}
              setVacancies={setVacancies}
              setIsLoading={setIsLoading}
              isFiltered={isFiltered}
              setCurrentPage={setCurrentPage}
              setIsSearched={setIsSearched}
            />
            <VacanciesList
              setSearch={setSearch}
              setSalaryFrom={setSalaryFrom}
              setSalaryTo={setSalaryTo}
              setIndustry={setIndustry}
              setVacancies={setVacancies}
              isLoading={isLoading}
              vacancies={vacancies}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              setIsLoading={setIsLoading}
            />
          </div>
        </div>
      </div>
    </main>
  );
};
