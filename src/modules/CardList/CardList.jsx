import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import CardItem from './CardItem';

import { updateById } from '../../shared/services/mockAPI';
import { setError, toggleFollowings } from '../../redux/tweets/tweets-slice';

import styles from './cardList.module.css';

const CardList = ({ items, setItems, followings }) => {
  const dispatch = useDispatch();

  const onFollowBtnClick = useCallback(
    async userData => {
      const { id } = userData;

      if (!followings.includes(id)) {
        setItems(prev =>
          prev.map(item =>
            item.id !== id ? item : { ...item, followers: item.followers + 1 },
          ),
        );
        dispatch(toggleFollowings([...followings, id]));
        try {
          await updateById(userData);
        } catch (error) {
          setError(error.message);
        }
        return;
      }
      setItems(prev =>
        prev.map(item =>
          item.id !== id ? item : { ...item, followers: item.followers - 1 },
        ),
      );
      dispatch(toggleFollowings(followings.filter(item => item !== id)));
    },
    [dispatch, setItems, followings],
  );

  const elements = items.map(item => (
    <CardItem
      key={item.id}
      {...item}
      isFollowing={followings.includes(item.id)}
      onClick={onFollowBtnClick}
    />
  ));
  return <ul className={styles.list}>{elements}</ul>;
};

CardList.defaultProps = {
  items: [],
};

export default CardList;
