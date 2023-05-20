const CardItem = ({ id, avatar, followers, tweets, user }) => {
  return (
    <li style={{ width: '380px', height: '460px', backgroundColor: 'yellow' }}>
      <p>{user}</p>
    </li>
  );
};

export default CardItem;
