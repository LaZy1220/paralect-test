import { useNavigate } from "react-router-dom";
import NothingHereImg from "/assets/nothing-here.svg";
import styles from "./NothingHere.module.scss";
import cn from "classnames";
import { getVacancies } from "../../services/getVacancies";
import { resetFilters } from "../../utils/filters";

export const NothingHere = ({
  setSearch,
  setSalaryFrom,
  setSalaryTo,
  setIndustry,
  isHomePage = false,
  setVacancies,
  setIsLoading,
}) => {
  const navigate = useNavigate();
  return (
    <div className={cn(styles.center, styles.column)}>
      <img src={NothingHereImg} alt="Nothing here" />
      <h1 className={styles.title}>Упс, здесь еще ничего нет!</h1>
      {!isHomePage ? (
        <button onClick={() => navigate("/")} className={styles.button}>
          Поиск Вакансий
        </button>
      ) : (
        <button
          onClick={() => {
            setIsLoading(true);
            setSearch("");
            resetFilters(setSalaryFrom, setSalaryTo, setIndustry);
            getVacancies().then((data) => {
              setVacancies(data);
              setIsLoading(false);
            });
          }}
          className={styles.button}
        >
          Поиск Вакансий
        </button>
      )}
    </div>
  );
};
