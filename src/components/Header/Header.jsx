import { useState } from "react";
import Logo from "../../assets/logo.svg";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import cn from "classnames";

export const Header = () => {
  const [isActive, setIsActive] = useState();

  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <div className="center">
          <div className={styles.logo}>
            <img src={Logo} alt="logo" />
            <span className={styles["logo-title"]}>Jobored</span>
          </div>
          <div className={styles.buttons}>
            <Link
              to="/"
              id="search-vacancies"
              className={cn(styles.button, {
                [styles["active-link"]]: isActive === search - vacancies,
              })}
            >
              Поиск Вакансий
            </Link>
            <Link to="/favorites" id="favorites" className={setActive}>
              Избранное
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
