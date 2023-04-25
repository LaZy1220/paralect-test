import styles from "./Home.module.scss";
import { Container } from "../../components/Container/Container";
import { Filters } from "../../components/Filters/Filters";
import { Search } from "../../components/Search/Search";
import { useEffect, useState } from "react";
import { getAllVacancies } from "../../services/getAllVacancies";
import { VacanciesList } from "../../components/Vacancies/VacanciesList";

export const Home = () => {
  const [vacancies, setVacancies] = useState([]);
  const [industry, setIndustry] = useState("");
  const [salaryFrom, setSalaryFrom] = useState("");
  const [salaryTo, setSalaryTo] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    getAllVacancies(1);
  }, []);
  return (
    <main className={styles.home}>
      <Container>
        <div className={styles.flex}>
          <Filters
            setIndustry={setIndustry}
            industry={industry}
            setSalaryFrom={setSalaryFrom}
            salaryFrom={salaryFrom}
            setSalaryTo={setSalaryTo}
            salaryTo={salaryTo}
          />
          <div className={styles["full-width"]}>
            <Search />
            <VacanciesList />
          </div>
        </div>
      </Container>
    </main>
  );
};
