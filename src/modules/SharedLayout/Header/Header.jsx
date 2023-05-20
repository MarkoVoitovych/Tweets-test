import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { signOut } from '../../../redux/auth/auth-operations';
import useAuth from './../../../shared/hooks/useAuth';
import useUserInfo from './../../../shared/hooks/useUserInfo';

const Navbar = () => {
  const dispatch = useDispatch();
  const isLogin = useAuth();
  const currentUser = useUserInfo();

  const handleLogout = () => {
    dispatch(signOut());
  };

  return (
    <header
      style={{
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <nav
        style={{
          display: 'flex',
          gap: '20px',
        }}
      >
        <NavLink to="/">Home</NavLink>
        {isLogin ? (
          <NavLink to="/tweets">Tweets</NavLink>
        ) : (
          <NavLink to="/login">Login</NavLink>
        )}
      </nav>
      {isLogin && (
        <div
          style={{
            display: 'flex',
            gap: '20px',
          }}
        >
          <p>{currentUser.email}</p>
          <img src={currentUser.photoURL} width="40" alt={currentUser.name} />
          <button type="button" onClick={handleLogout}>
            LogOut
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
