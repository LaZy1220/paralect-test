import styles from "./Search.module.scss";
import SearchImg from "../../assets/search.svg";

export const Search = () => {
  return (
    <div className={styles.search}>
      <img src={SearchImg} alt="search" />
      <input
        className={styles["search-input"]}
        placeholder="Введите название вакансии"
      />
      <button>Поиск</button>
    </div>
  );
};
