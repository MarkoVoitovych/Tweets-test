import { memo } from 'react';
import { useSelector } from 'react-redux';
import ReactPaginate from 'react-paginate';

import { selectTotalTweets } from './../../redux/tweets/tweets-selectors';
import { ITEMS_PER_PAGE } from '../../shared/utils/defaults';

import styles from './pagination.module.css';

const Pagination = ({ handlePaginationChange }) => {
  const totalItems = useSelector(selectTotalTweets);

  const pageCount = Math.ceil(totalItems / ITEMS_PER_PAGE);

  return (
    <>
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePaginationChange}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
        containerClassName={styles.container}
        breakLinkClassName={styles.link}
        pageClassName={styles.item}
        pageLinkClassName={styles.link}
        activeClassName={styles.selected}
      />
    </>
  );
};

export default memo(Pagination);
