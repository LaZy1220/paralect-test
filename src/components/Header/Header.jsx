import Logo from "../../../public/logo.svg";
import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.flex}>
          <div className={styles.logo}>
            <img src={Logo} alt="" />
            <span>Jobored</span>
          </div>
          <div className={styles.buttons}>
            <span className={styles.active}>Поиск Вакансий</span>
            <span>Избранное</span>
          </div>
        </div>
      </div>
    </header>
  );
};
