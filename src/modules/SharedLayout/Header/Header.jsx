import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

import Button from '@mui/material/Button';
import { MdLogout } from 'react-icons/md';

import { signOut } from '../../../redux/auth/auth-operations';
import useAuth from './../../../shared/hooks/useAuth';
import useUserInfo from './../../../shared/hooks/useUserInfo';

import styles from './header.module.css';

const getClassName = ({ isActive }) => {
  return isActive ? styles.active : '';
};

const Navbar = () => {
  const dispatch = useDispatch();
  const isLogin = useAuth();
  const currentUser = useUserInfo();

  const handleLogout = () => {
    dispatch(signOut());
  };

  return (
    <header className={styles.header}>
      <nav className={styles.navigation}>
        <Button
          variant="contained"
          sx={{
            fontSize: '20px',
            backgroundColor: '#EBD8FF',
            color: '#373737',
            padding: '1px 10px',
            '&:hover': {
              backgroundColor: '#5CD3A8',
            },
          }}
        >
          <NavLink className={getClassName} to="/">
            Home
          </NavLink>
        </Button>
        <Button
          variant="contained"
          sx={{
            fontSize: '20px',
            backgroundColor: '#EBD8FF',
            color: '#373737',
            padding: '1px 10px',
            '&:hover': {
              backgroundColor: '#5CD3A8',
            },
          }}
        >
          {isLogin ? (
            <NavLink className={getClassName} to="/tweets">
              Tweets
            </NavLink>
          ) : (
            <NavLink className={getClassName} to="/login">
              Login
            </NavLink>
          )}
        </Button>
      </nav>
      {isLogin && (
        <div className={styles.userMenu}>
          <div className={styles.userImgThumb}>
            <img
              className={styles.userImg}
              src={currentUser.photoURL}
              alt={currentUser.name}
            />
          </div>
          <button
            className={styles.logoutBtn}
            type="button"
            onClick={handleLogout}
          >
            <MdLogout size={32} className={styles.logoutBtnIcon} />
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
