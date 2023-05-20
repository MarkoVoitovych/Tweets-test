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
    dispatch(fetchingOn());
    try {
      authRefreshUser(dispatch);
      dispatch(fetchAllTweets());
    } catch (error) {
      setError(error.message);
    }
    setTimeout(() => {
      dispatch(fetchingOff());
    }, 0);
  }, [dispatch, isLogin]);

  return <Routing />;
};

export default App;
