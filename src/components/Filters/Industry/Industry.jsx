import { Select } from "@mantine/core";
import BigArrow from "../../../assets/big-arrow.svg";
import styles from "../Filters.module.scss";
import cn from "classnames";
import { getCategories } from "../../../services/getCategories";
import { useEffect, useState } from "react";

export const Industry = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getCategories().then((data) => setCategories(data));
  }, []);
  return (
    <Select
      className={cn(styles.select, styles.gap)}
      label="Отрасль"
      data-elem="industry-select"
      placeholder="Выберите отрасль"
      rightSection={<img src={BigArrow} alt="big-arrow" />}
      rightSectionWidth={40}
      maxDropdownHeight={140}
      styles={{ rightSection: { pointerEvents: "none" } }}
      data={categories}
    />
  );
};
