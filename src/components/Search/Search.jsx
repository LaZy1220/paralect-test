import styles from "./Search.module.scss";
import SearchImg from "/assets/search.svg";
import cn from "classnames";
import { getVacancies } from "../../services/getVacancies";

export const Search = ({
  search,
  setSearch,
  industry,
  salaryFrom,
  salaryTo,
  setVacancies,
  setIsLoading,
  isFiltered,
  setCurrentPage,
  setIsSearched,
}) => {
  const getRequest = () => {
    if (search.trim() === "") {
      return;
    }
    setIsLoading(true);
    setCurrentPage(1);
    setIsSearched(true);
    getVacancies(search, salaryFrom, salaryTo, industry, isFiltered, true).then(
      (data) => {
        setVacancies(data);
        setIsLoading(false);
      }
    );
  };
  const onKeyDownEnter = (event) => {
    if (event.key !== "Enter") {
      return;
    }
    getRequest();
  };
  return (
    <div className={styles.search}>
      <img className={styles["search-icon"]} src={SearchImg} alt="search" />
      <input
        data-elem="search-input"
        className={styles["search-input"]}
        value={search}
        onChange={(event) => {
          setSearch(event.target.value);
          if (event.target.value.trim() === "") {
            setIsSearched(false);
          }
        }}
        onKeyDown={onKeyDownEnter}
        placeholder="Введите название вакансии"
      />
      <button
        onClick={() => {
          getRequest();
        }}
        data-elem="search-button"
        className={cn(styles.button)}
      >
        Поиск
      </button>
    </div>
  );
};
