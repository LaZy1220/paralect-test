import { useState } from "react";
import Logo from "../../assets/logo.svg";
import styles from "./Header.module.scss";
import { NavLink } from "react-router-dom";
import { Container } from "../Container/Container";

export const Header = () => {
  const setActive = ({ isActive }) =>
    isActive ? styles["active-link"] : styles.button;
  return (
    <header className={styles.header}>
      <Container>
        <div className="center">
          <div className={styles.logo}>
            <img src={Logo} alt="logo" />
            <span className={styles["logo-title"]}>Jobored</span>
          </div>
          <div className={styles.buttons}>
            <NavLink to="/" className={setActive}>
              Поиск Вакансий
            </NavLink>
            <NavLink to="/favorites" className={setActive}>
              Избранное
            </NavLink>
          </div>
        </div>
      </Container>
    </header>
  );
};
