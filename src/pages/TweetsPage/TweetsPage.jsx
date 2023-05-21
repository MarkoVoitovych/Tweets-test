import { useEffect, useState, useCallback, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';

import CardList from '../../modules/CardList';
import DropDown from '../../modules/DropDown';
import Pagination from './../../modules/Pagination';

import { getByPage } from './../../shared/services/mockAPI';
import filterTweets from './../../shared/utils/filterTweets';

import styles from './tweetsPage.module.css';

const TweetsPage = () => {
  const [tweets, setTweets] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams({
    page: 1,
    filter: 'all',
  });
  const params = useMemo(
    () => Object.fromEntries([...searchParams]),
    [searchParams],
  );
  const { page, filter } = params;

  const filteredTweets = filterTweets({ filter, tweets, followings: [] });

  useEffect(() => {
    (async () => {
      const result = await getByPage(Number(page));
      setTweets(result);
    })();
  }, [page]);

  const handlePaginationChange = useCallback(
    e => {
      setSearchParams({ ...params, page: e.selected + 1 });
    },
    [params, setSearchParams],
  );

  const handleDropDownChange = useCallback(
    e => {
      setSearchParams({ ...params, filter: e.value });
    },
    [params, setSearchParams],
  );

  return (
    <div className={styles.container}>
      <DropDown filter={filter} handleDropDownChange={handleDropDownChange} />
      <Pagination handlePaginationChange={handlePaginationChange} />
      <CardList items={filteredTweets} />
    </div>
  );
};

export default TweetsPage;
