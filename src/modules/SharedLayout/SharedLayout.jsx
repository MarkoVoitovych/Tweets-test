import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Header from './Header';
import Loader from './../../shared/components/Loader';

import styles from './sharedLayout.module.css';

const SharedLayout = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default SharedLayout;
