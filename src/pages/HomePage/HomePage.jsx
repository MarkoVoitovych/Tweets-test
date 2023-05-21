import useAuth from '../../shared/hooks/useAuth';
import useUserInfo from '../../shared/hooks/useUserInfo';

import styles from './homePage.module.css';

const HomePage = () => {
  const isLogin = useAuth();
  const currentUser = useUserInfo();

  return (
    <div className={styles.textWrapper}>
      <p>
        Hello,{' '}
        <span className={styles.text}>
          {isLogin ? currentUser.name : 'guest'}
        </span>
        !
      </p>
      <p> We are glad to meet you!</p>
      <p>
        {' '}
        Enjoy <em>YourTweets</em>!{' '}
      </p>
    </div>
  );
};

export default HomePage;
