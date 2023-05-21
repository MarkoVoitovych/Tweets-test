import CardItem from './CardItem';

import styles from './cardList.module.css';

const CardList = ({ items }) => {
  const elements = items.map(item => <CardItem key={item.id} {...item} />);
  return <ul className={styles.list}>{elements}</ul>;
};

CardList.defaultProps = {
  items: [],
};

export default CardList;
