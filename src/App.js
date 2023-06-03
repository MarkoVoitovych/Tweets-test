import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Routing from './modules/Routing';

import useAuth from './shared/hooks/useAuth';
import { fetchingOff, fetchingOn, setError } from './redux/auth/auth-slice';
import { authRefreshUser } from './shared/services/firebaseAPI';
import { fetchAllTweets } from './redux/tweets/tweets-operations';

const App = () => {
  const dispatch = useDispatch();
  const isLogin = useAuth();

  useEffect(() => {
    if (!isLogin) return;
    try {
      dispatch(fetchingOn());
      authRefreshUser(dispatch);
      dispatch(fetchAllTweets());
    } catch (error) {
      setError(error.message);
    } finally {
      dispatch(fetchingOff());
    }
  }, [dispatch, isLogin]);

  return <Routing />;
};

export default App;
