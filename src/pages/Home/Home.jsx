import styles from "./Home.module.scss";
import { Container } from "../../components/Container/Container";
import { Filters } from "../../components/Filters/Filters";
import { Search } from "../../components/Search/Search";
import { useEffect, useState } from "react";
import { getAllVacancies } from "../../services/getAllVacancies";
import { VacanciesList } from "../../components/Vacancies/VacanciesList";

export const Home = () => {
  const [] = useState("");
  const [] = useState("");
  const [] = useState("");
  const [] = useState("");
  useEffect(() => {
    getAllVacancies();
  }, []);
  return (
    <main className={styles.home}>
      <Container>
        <div className={styles.flex}>
          <Filters />
          <div className={styles["full-width"]}>
            <Search />
            <VacanciesList />
          </div>
        </div>
      </Container>
    </main>
  );
};
