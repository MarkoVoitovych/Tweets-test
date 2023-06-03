import { useEffect, useState, useCallback, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import CardList from '../../modules/CardList';
import DropDown from '../../modules/DropDown';
import Pagination from './../../modules/Pagination';
import Loader from './../../shared/components/Loader/Loader';

import { getByPage } from './../../shared/services/mockAPI';
import filterTweets from './../../shared/utils/filterTweets';
import {
  selectFollowings,
  selectIsLoading,
} from '../../redux/tweets/tweets-selectors';
import {
  loadingOff,
  loadingOn,
  setError,
} from '../../redux/tweets/tweets-slice';

import styles from './tweetsPage.module.css';

const TweetsPage = () => {
  const [tweets, setTweets] = useState([]);
  const followings = useSelector(selectFollowings);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  const [searchParams, setSearchParams] = useSearchParams({
    page: 1,
    filter: 'all',
  });
  const params = useMemo(
    () => Object.fromEntries([...searchParams]),
    [searchParams],
  );
  const { page, filter } = params;

  const filteredTweets = filterTweets({ filter, tweets, followings });

  useEffect(() => {
    (async () => {
      try {
        dispatch(loadingOn());
        const result = await getByPage(Number(page));
        setTweets(result);
      } catch (error) {
        dispatch(setError(error.message));
      } finally {
        dispatch(loadingOff());
      }
    })();
  }, [page, dispatch]);

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
      {isLoading ? (
        <Loader />
      ) : (
        <CardList
          items={filteredTweets}
          setItems={setTweets}
          followings={followings}
        />
      )}
    </div>
  );
};

export default TweetsPage;
