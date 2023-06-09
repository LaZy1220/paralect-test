import { useNavigate } from "react-router-dom";
import { Card } from "../../Card/Card";
import styles from "../VacanciesList.module.scss";

export const VacanciesItem = ({ vacancy, checkIsFavorite }) => {
  const navigate = useNavigate();
  return (
    <li className={styles["list-item"]} data-elem={`vacancy-${vacancy.id}`}>
      <Card
        navigate={navigate}
        vacancy={vacancy}
        checkIsFavorite={checkIsFavorite}
      />
    </li>
  );
};
