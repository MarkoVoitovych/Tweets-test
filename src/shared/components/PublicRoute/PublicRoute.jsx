import { Navigate, Outlet } from 'react-router-dom';

import useAuth from '../../hooks/useAuth';

const PublicRoute = ({ restricted }) => {
  const isLogin = useAuth();

  return isLogin && restricted ? <Navigate to="/tweets" /> : <Outlet />;
};

export default PublicRoute;
