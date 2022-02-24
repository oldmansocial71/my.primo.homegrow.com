import React from 'react';
//MUI Imports
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

//fontawesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  solid,
  regular,
  brands,
} from '@fortawesome/fontawesome-svg-core/import.macro';
import { Link } from '@mui/material';

const drawerWidth = 240;

function SideBar() {
  return (
    <Drawer
      variant='permanent'
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: 'border-box',
        },
      }}>
      <Toolbar />
      <Box sx={{ overflow: 'auto' }}>
        <List>
          <Link href='/'>
            <ListItem button>
              <FontAwesomeIcon
                size='2xl'
                icon={regular('cannabis')}
                style={{ paddingRight: '20px' }}
              />
              <ListItemText>Plants</ListItemText>
            </ListItem>
          </Link>
          <Link href='/'>
            <ListItem button>
              <FontAwesomeIcon
                size='2xl'
                icon={regular('house-tree')}
                style={{ paddingRight: '20px' }}
              />
              <ListItemText>Lots</ListItemText>
            </ListItem>
          </Link>
        </List>
      </Box>
    </Drawer>
  );
}

export default SideBar;
