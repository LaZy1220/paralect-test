export const checkIsEmpty = (industry, salaryFrom, salaryTo) => {
  if (industry === "" && salaryFrom === "" && salaryTo === "") {
    return true;
  }
  return false;
};
