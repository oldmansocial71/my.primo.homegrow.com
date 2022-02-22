import React from 'react';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import { Toolbar, Typography } from '@mui/material';

function TopBar() {
  return (
    <>
      <CssBaseline />
      <AppBar
        position='fixed'
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Typography variant='h6' noWrap component='div'>
            Primo Homegrow App
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default TopBar;
