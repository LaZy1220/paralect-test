import { Select } from "@mantine/core";
import BigArrow from "../../../assets/big-arrow.svg";
import styles from "../Filters.module.scss";
import cn from "classnames";
import { getCatalogues } from "../../../services/getCatalogues";
import { useEffect, useState } from "react";

export const Industry = ({ industry, setIndustry }) => {
  const [catalogues, setCatalogues] = useState([]);
  useEffect(() => {
    getCatalogues().then((data) => setCatalogues(data));
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
      data={catalogues}
    />
  );
};
