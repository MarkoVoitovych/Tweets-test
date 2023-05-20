import { Link } from 'react-router-dom';

// import useAuth from '../../../shared/hooks/useAuth';

const Navbar = () => {
  //   const isLogin = useAuth();

  return (
    <header>
      <nav
        style={{
          display: 'flex',
          gap: '20px',
        }}
      >
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        {/* {isLogin ? <Link to="/tweets">Profile</Link> : <div>Login</div>} */}
        <Link to="/tweets">Tweets</Link>
      </nav>
    </header>
  );
};

export default Navbar;
