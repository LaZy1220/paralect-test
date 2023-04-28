export const decrementSalary = (setValue, value) => {
  if (value < 100) {
    setValue(0);
    return;
  }
  setValue((prev) => prev - 100);
};

export const incrementSalary = (setValue) => {
  setValue((prev) => Number(prev) + 100);
};

export const resetFilters = (setIndustry, setSalaryFrom, setSalaryTo) => {
  setIndustry("");
  setSalaryFrom("");
  setSalaryTo("");
};
