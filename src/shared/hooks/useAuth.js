import { useSelector } from 'react-redux';

import { selectIsAuth } from '../../redux/auth/auth-selectors';

const useAuth = () => {
  const result = useSelector(selectIsAuth);

  return result;
};

export default useAuth;
