import React from 'react';
import Sidenav from '../Components/Sidenav/Sidenav';
import { Outlet } from 'react-router-dom';

const HomeLayout = () => (
  <div style={{ display: 'flex' }}>
    <Sidenav />
    <div style={{ flex: 1 }}>
      <Outlet />
    </div>
  </div>
);

export default HomeLayout;