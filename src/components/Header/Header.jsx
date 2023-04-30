import { useEffect, useState } from "react";
import Logo from "../../assets/logo.svg";
import styles from "./Header.module.scss";
import { Link, useLocation } from "react-router-dom";
import cn from "classnames";

export const Header = () => {
  const [isActive, setIsActive] = useState();
  const location = useLocation();
  const handleClick = (event) => {
    setIsActive(event.target.id);
  };
  useEffect(() => {
    if (location.pathname === "/favorites") {
      setIsActive("favorites");
    } else {
      setIsActive("search-vacancies");
    }
  });
  console.log(location.pathname);
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
              onClick={handleClick}
              className={cn(styles.button, {
                [styles["active-link"]]: isActive === "search-vacancies",
              })}
            >
              Поиск Вакансий
            </Link>
            <Link
              to="/favorites"
              id="favorites"
              onClick={handleClick}
              className={cn(styles.button, {
                [styles["active-link"]]: isActive === "favorites",
              })}
            >
              Избранное
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
