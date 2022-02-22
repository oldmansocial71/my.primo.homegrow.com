import React from 'react';
import Paper from '@mui/material/Paper';
import { blue } from '@mui/material/colors';
//fontawesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  solid,
  regular,
  brands,
} from '@fortawesome/fontawesome-svg-core/import.macro';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from '@mui/material';

function DashboardSummary({ plants }) {
  return (
    <Paper
      elevation={1}
      sx={{
        padding: '14px',
        marginBottom: '28px',
        marginTop: '28px',
        display: 'flex',
        width: '100%',
      }}>
      <Box sx={{ width: 275, mr: 2 }}>
        <Card sx={{ backgroundColor: blue[500], color: 'white' }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 14, display: 'flex', justifyContent: 'center' }}
              gutterBottom>
              Number of Plants
            </Typography>
            <Typography
              component='div'
              sx={{
                fontSize: 64,
                display: 'flex',
                justifyContent: 'center',
              }}>
              {plants.length}
            </Typography>
          </CardContent>
        </Card>
      </Box>
      <Box sx={{ width: 275 }}>
        <Card sx={{ backgroundColor: blue[500], color: 'white' }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 14, display: 'flex', justifyContent: 'center' }}
              gutterBottom>
              Flowering
            </Typography>
            <Typography
              component='div'
              sx={{
                fontSize: 64,
                display: 'flex',
                justifyContent: 'center',
              }}>
              {plants.filter((obj) => obj.plant_stage == 'Flowering').length}
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Paper>
  );
}

export default DashboardSummary;
