import { Container } from "../components/Container/Container";
import { NothingHere } from "../components/NothingHere/NothingHere";
import cn from "classnames";

export const Favorites = () => {
  const test = null;
  return (
    <main className={cn("favorites", { ["nothing"]: !test })}>
      <NothingHere />;
    </main>
  );
};
