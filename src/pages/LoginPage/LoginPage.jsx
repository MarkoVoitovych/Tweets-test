import { useDispatch } from 'react-redux';

import { signInWithGoogle } from '../../redux/auth/auth-operations';

const LoginPage = () => {
  const dispatch = useDispatch();

  const handleGooleAuth = () => {
    dispatch(signInWithGoogle());
  };

  return (
    <>
      <div>LoginPage</div>
      <button type="button" onClick={handleGooleAuth}>
        GoogleAuth
      </button>
    </>
  );
};

export default LoginPage;
