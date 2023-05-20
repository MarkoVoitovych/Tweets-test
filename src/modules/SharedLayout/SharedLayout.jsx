import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Navbar from './Navbar';

const SharedLayout = () => {
  return (
    <>
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
      <footer>Footer</footer>
    </>
  );
};

export default SharedLayout;
