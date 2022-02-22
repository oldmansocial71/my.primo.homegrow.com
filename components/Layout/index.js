import React from 'react';
import SideBar from './SideBar';
import TopBar from './TopBar';

function Layout({ children }) {
  return (
    <>
      <TopBar />
      <SideBar />
      <main>{children}</main>
    </>
  );
}

export default Layout;
