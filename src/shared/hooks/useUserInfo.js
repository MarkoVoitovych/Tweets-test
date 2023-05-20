import { useSelector } from 'react-redux';

import { selectUser } from '../../redux/auth/auth-selectors';

const useUserInfo = () => {
  const result = useSelector(selectUser);

  return result;
};

export default useUserInfo;
