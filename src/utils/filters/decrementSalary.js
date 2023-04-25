export const decrementSalary = (setValue, value) => {
  if (value < 100) {
    setValue(0);
    return;
  }
  setValue((prev) => prev - 100);
};
