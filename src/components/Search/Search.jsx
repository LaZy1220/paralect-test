import styles from "./Search.module.scss";
import SearchImg from "../../assets/search.svg";
import cn from "classnames";

export const Search = () => {
  return (
    <div className={styles.search}>
      <img className={styles["search-icon"]} src={SearchImg} alt="search" />
      <input
        data-elem="search-input"
        className={styles["search-input"]}
        placeholder="Введите название вакансии"
      />
      <button data-elem="search-button" className={cn(styles.button)}>
        Поиск
      </button>
    </div>
  );
};
