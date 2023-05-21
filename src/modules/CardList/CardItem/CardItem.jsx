import logo from '../../../assets/images/CardLogo.svg';

import styles from './card-item.module.css';

const CardItem = ({ id, avatar, followers, tweets }) => {
  return (
    <li className={styles.cardWrap}>
      <div className={styles.upperPart}>
        <img className={styles.cardLogo} src={logo} alt="logo GoIt" />
      </div>
      <div className={styles.centerPart}>
        <div className={styles.userImgThumb}>
          <img className={styles.userImg} src={avatar} alt="UserPhoto" />
        </div>
      </div>
      <div className={styles.lowPart}>
        <p className={styles.lowPartText}>
          {tweets.toLocaleString('en-US') + ' Tweets'}
        </p>
        <p className={styles.lowPartText}>
          {followers.toLocaleString('en-US') + ' Followers'}
        </p>
        <button className={styles.cardBtn} type="button">
          {'Follow'}
        </button>
      </div>
    </li>
  );
};

export default CardItem;
