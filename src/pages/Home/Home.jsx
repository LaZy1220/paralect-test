import styles from "./Home.module.scss";
import { Container } from "../../components/Container/Container";
import { Filters } from "../../components/Filters/Filters";
import { Search } from "../../components/Search/Search";
import { useEffect, useState } from "react";
import { getAllVacancies } from "../../services/getAllVacancies";
import { VacanciesList } from "../../components/Vacancies/VacanciesList";
import { Paginate } from "../../components/Paginate/Paginate";

export const Home = ({ currentPage }) => {
  //vacancies state
  const [vacancies, setVacancies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  //inputs state
  const [industry, setIndustry] = useState("");
  const [salaryFrom, setSalaryFrom] = useState("");
  const [salaryTo, setSalaryTo] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    setIsLoading(true);
    getAllVacancies(currentPage - 1).then((data) => {
      setVacancies(data.objects);
      setIsLoading(false);
    });
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
            {isLoading ? (
              <div>Loading...</div>
            ) : (
              <VacanciesList vacancies={vacancies} />
            )}
            <div className={styles.center}>
              <Paginate currentPage={currentPage} />
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
};
