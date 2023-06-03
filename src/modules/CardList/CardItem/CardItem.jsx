import { memo } from 'react';

import logo from '../../../assets/images/CardLogo.svg';

import styles from './card-item.module.css';

const CardItem = ({
  id,
  user,
  avatar,
  followers,
  tweets,
  isFollowing,
  onClick,
}) => {
  const userData = {
    id,
    user,
    avatar,
    followers,
    tweets,
  };

  return (
    <li className={styles.cardWrap}>
      <div className={styles.upperPart}>
        <img className={styles.cardLogo} src={logo} alt="logo GOIT" />
      </div>
      <div className={styles.centerPart}>
        <div className={styles.userImgThumb}>
          <img className={styles.userImg} src={avatar} alt={user} />
        </div>
      </div>
      <div className={styles.lowPart}>
        <p className={styles.lowPartText}>
          {tweets.toLocaleString('en-US') + ' tweets'}
        </p>
        <p className={styles.lowPartText}>
          {followers.toLocaleString('en-US') + ' followers'}
        </p>
        <button
          className={styles.cardBtn}
          style={{ backgroundColor: isFollowing ? '#5CD3A8' : '#ebd8ff' }}
          type="button"
          onClick={() => onClick(userData)}
        >
          {isFollowing ? 'following' : 'follow'}
        </button>
      </div>
    </li>
  );
};

export default memo(CardItem);
