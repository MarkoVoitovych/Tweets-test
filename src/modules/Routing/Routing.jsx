import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import SharedLayout from '../SharedLayout';
import PrivateRoute from '../../shared/components/PrivateRoute';
import PublicRoute from '../../shared/components/PublicRoute';
import Loader from './../../shared/components/Loader/Loader';

import useAuth from '../../shared/hooks/useAuth';

const HomePage = lazy(() => import('../../pages/HomePage'));
const LoginPage = lazy(() => import('../../pages/LoginPage'));
const TweetsPage = lazy(() => import('../../pages/TweetsPage'));

const Routing = () => {
  const isLogin = useAuth();

  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route element={<PublicRoute />}>
            <Route index element={<HomePage />} />
          </Route>
          <Route element={<PublicRoute restricted />}>
            <Route path="/login" element={<LoginPage />} />
          </Route>
          <Route element={<PrivateRoute />}>
            <Route path="/tweets" element={<TweetsPage />} />
          </Route>
          <Route
            path="*"
            element={<Navigate to={isLogin ? '/' : '/login'} />}
          />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default Routing;
