import React from 'react';

//MUI Imports
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import Layout from '../components/Layout';

export default function Home() {
  return (
    <div>
      <main>
        <Box sx={{ display: 'flex' }}>
          <Layout />
          <Box component='main' sx={{ flexGrow: 1, p: 3 }}>
            <Toolbar />
            <Typography paragraph>Nothing to do here bro. Sup?</Typography>
          </Box>
        </Box>
      </main>

      <footer>footer</footer>
    </div>
  );
}
