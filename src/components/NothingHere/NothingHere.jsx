import { useNavigate } from "react-router-dom";
import NothingHereImg from "../../assets/NothingHere.svg";
import styles from "./NothingHere.module.scss";

export const NothingHere = () => {
  const navigate = useNavigate();
  return (
    <div className="center column">
      <img src={NothingHereImg} alt="Nothing here" />
      <h1 className={styles.title}>Упс, здесь еще ничего нет!</h1>
      <button onClick={() => navigate("/")} className={styles.button}>
        Поиск Вакансий
      </button>
    </div>
  );
};
