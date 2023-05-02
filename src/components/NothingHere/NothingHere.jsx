import { useNavigate } from "react-router-dom";
import NothingHereImg from "../../assets/nothing-here.svg";
import styles from "./NothingHere.module.scss";

export const NothingHere = ({ isHomePage = false }) => {
  const navigate = useNavigate();
  return (
    <>
      {isHomePage ? (
        <div className="center column">
          <img src={NothingHereImg} alt="Nothing here" />
          <h1 className={styles.title}>Ой, таких вакансий нет!</h1>
        </div>
      ) : (
        <div className="center column">
          <img src={NothingHereImg} alt="Nothing here" />
          <h1 className={styles.title}>Упс, здесь еще ничего нет!</h1>
          <button onClick={() => navigate("/")} className={styles.button}>
            Поиск Вакансий
          </button>
        </div>
      )}
    </>
  );
};
