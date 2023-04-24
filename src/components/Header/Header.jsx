import { useState } from "react";
import Logo from "../../../public/logo.svg";
import styles from "./Header.module.scss";
import cn from "classnames";

export const Header = () => {
  const [activeButton, setActiveButton] = useState(1);
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.flex}>
          <div className={styles.logo}>
            <img src={Logo} alt="" />
            <span>Jobored</span>
          </div>
          <div className={styles.buttons}>
            <span
              onClick={() => setActiveButton(1)}
              className={cn(styles.button, {
                [styles.active]: activeButton === 1,
              })}
            >
              Поиск Вакансий
            </span>
            <span
              onClick={() => setActiveButton(2)}
              className={cn(styles.button, {
                [styles.active]: activeButton === 2,
              })}
            >
              Избранное
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};
