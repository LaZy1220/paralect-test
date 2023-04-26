import { Select } from "@mantine/core";
import BigArrow from "../../../assets/big-arrow.svg";
import styles from "../Filters.module.scss";
import cn from "classnames";
import { getCategories } from "../../../services/getCategories";
import { useEffect, useState } from "react";

// value={search}
//onChange={(event) => setSearch(event.target.value)}

export const Industry = ({ industry, setIndustry }) => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getCategories().then((data) => setCategories(data));
  }, []);
  return (
    <Select
      className={cn(styles.select, styles.gap)}
      label="Отрасль"
      value={industry}
      onChange={setIndustry}
      data-elem="industry-select"
      placeholder="Выберите отрасль"
      rightSection={<img src={BigArrow} alt="big-arrow" />}
      rightSectionWidth={50}
      maxDropdownHeight={180}
      styles={{ rightSection: { pointerEvents: "none" } }}
      data={categories}
    />
  );
};
