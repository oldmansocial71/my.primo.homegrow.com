import { Container } from '@mui/material';
import React from 'react';
import SideBar from './SideBar';
import TopBar from './TopBar';

function Layout({ children }) {
  return (
    <>
      <TopBar />
      <SideBar />
      <Container sx={{ marginLeft: '240px' }}>{children}</Container>
    </>
  );
}

export default Layout;
