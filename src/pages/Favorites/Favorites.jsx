import { Container } from "../../components/Container/Container";
import { NothingHere } from "../../components/NothingHere/NothingHere";
import styles from "./Favorites.module.scss";
import cn from "classnames";

export const Favorites = () => {
  const test = null;
  return (
    <main className={cn(styles.favorites, { [styles.nothing]: !test })}>
      <NothingHere />;
    </main>
  );
};
