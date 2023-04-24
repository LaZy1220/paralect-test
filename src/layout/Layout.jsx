import { Header } from "../components/Header/Header";
import styles from "./Layout.module.scss";

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className={styles.background}>{children}</div>
    </>
  );
};
