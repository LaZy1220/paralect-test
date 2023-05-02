import { useNavigate } from "react-router-dom";
import { Card } from "../../Card/Card";
import styles from "../VacanciesList.module.scss";

export const VacanciesItem = ({ vacancy }) => {
  const navigate = useNavigate();
  return (
    <li className={styles["list-item"]}>
      <Card navigate={navigate} vacancy={vacancy} />
    </li>
  );
};
