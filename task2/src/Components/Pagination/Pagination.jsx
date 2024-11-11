export const Pagination = ({
  currentPage,
  clickOnPrevPage,
  clickOnNextPage,
  totalPages,
}) => (
  <>
    <button
      onClick={() => clickOnPrevPage(currentPage)}
      disabled={currentPage === 1}
    >
      Предыдущая страница
    </button>
    <div>{currentPage}</div>
    <button
      onClick={() => clickOnNextPage(currentPage)}
      disabled={currentPage === totalPages}
    >
      Следующая страница
    </button>
  </>
);
