export const incrementPage = (setCurrentPage) => {
  setCurrentPage((prev) => prev + 1);
};
export const decrementPage = (currentPage, setCurrentPage) => {
  if (currentPage === 1) {
    return;
  }
  setCurrentPage((prev) => prev - 1);
};
export const handleChangePage = (page, setCurrentPage) => {
  setCurrentPage(page);
};
