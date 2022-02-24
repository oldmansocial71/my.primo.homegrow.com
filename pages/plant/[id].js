import { Container, Paper, Toolbar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Image from 'next/image';
import React from 'react';
import Plant from '../../models/Plant';
import dbConnect from '../../lib/dbConnect';

function PlantId({ plant }) {
  return (
    <div>
      <main>
        {/* Toolbar is spacer accommodating for TopBar in Layout */}
        <Toolbar />
        <Container>
          <Paper sx={{ p: 6, display: 'flex' }}>
            <Box
              sx={{
                width: '96px',
                height: '96px',

                borderRadius: '50%',
                overflow: 'hidden',
              }}>
              <Image
                layout='responsive'
                width='96px'
                height='96px'
                src='https://ilgm.com/media/catalog/product/cache/8750a4020f682e7ffca93b95780417b5/s/u/superskunk.jpg'
              />
            </Box>
            <Box sx={{ pl: 2 }}>
              <Box>
                <Typography variant='h4'>{plant.plant_name}</Typography>
              </Box>
              <Box>
                <Typography variant='caption'>{plant.strain_name}</Typography>
              </Box>
            </Box>
          </Paper>
        </Container>
      </main>
    </div>
  );
}

export default PlantId;

/* Retrieves one plant and its data from mongodb database */

export async function getServerSideProps(context) {
  /* Get the id for findById */
  const { params } = context;
  const plantId = params.id;

  await dbConnect();
  /* find one plant in our database */
  const result = await Plant.findById(plantId);
  const plant = await JSON.parse(JSON.stringify(result));
  return { props: { plant: plant } };
}
