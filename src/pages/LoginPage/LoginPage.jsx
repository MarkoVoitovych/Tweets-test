import { useDispatch } from 'react-redux';

import { FcGoogle } from 'react-icons/fc';
import { FaLongArrowAltRight } from 'react-icons/fa';

import { signInWithGoogle } from '../../redux/auth/auth-operations';

import styles from './loginPage.module.css';

const LoginPage = () => {
  const dispatch = useDispatch();

  const handleGooleAuth = () => {
    dispatch(signInWithGoogle());
  };

  return (
    <div className={styles.wrapper}>
      <p className={styles.text}>Please, login with Google</p>
      <FaLongArrowAltRight className={styles.arrow} />
      <button className={styles.button} type="button" onClick={handleGooleAuth}>
        <FcGoogle className={styles.icon} size={32} />
      </button>
    </div>
  );
};

export default LoginPage;
