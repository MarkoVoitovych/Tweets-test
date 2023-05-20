import ReactPaginate from 'react-paginate';

import styles from './pagination.module.css';

function Pagination({ totalItems, itemsPerPage, setSearchParams, params }) {
  const pageCount = Math.ceil(totalItems / itemsPerPage);

  const handlePageClick = event => {
    setSearchParams({ ...params, page: event.selected + 1 });
  };

  return (
    <>
      <ReactPaginate
        className={styles.container}
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={4}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
    </>
  );
}

export default Pagination;
