import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import CardList from '../../modules/CardList';
import DropDown from '../../modules/DropDown';

import { selectPage, selectFilter } from '../../redux/tweets/tweets-selectors';
import { getByPage } from './../../shared/services/mockAPI';

const TweetsPage = () => {
  const [tweets, setTweets] = useState([]);
  const page = useSelector(selectPage);
  const filter = useSelector(selectFilter);

  useEffect(() => {
    (async () => {
      const result = await getByPage(page);
      setTweets([...result]);
    })();
  }, [page]);

  // const filteredTweets = tweets.filter()

  return (
    <div style={{ flexGrow: '1' }}>
      <div>
        <DropDown />
      </div>
      <CardList items={tweets} />
    </div>
  );
};

export default TweetsPage;
