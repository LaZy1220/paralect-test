import styles from "./Home.module.scss";
import { Container } from "../../components/Container/Container";
import { Filters } from "../../components/Filters/Filters";
import { Search } from "../../components/Search/Search";

export const Home = () => {
  return (
    <main className={styles.home}>
      <Container>
        <div className={styles.flex}>
          <Filters />
          <div className={styles["full-width"]}>
            <Search />
            <div>Вакансии</div>
          </div>
        </div>
      </Container>
    </main>
  );
};
