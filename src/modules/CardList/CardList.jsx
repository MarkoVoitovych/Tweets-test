import CardItem from './CardItem';

const CardList = ({ items }) => {
  const elements = items.map(item => <CardItem key={item.id} {...item} />);
  return (
    <ul
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '20px',
      }}
    >
      {elements}
    </ul>
  );
};

CardList.defaultProps = {
  items: [],
};

export default CardList;
