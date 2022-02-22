import React from 'react';
import dbConnect from '../lib/dbConnect';
import Plant from '../models/Plant';

//MUI Imports
import Toolbar from '@mui/material/Toolbar';
import Layout from '../components/Layout';
import Table from '../components/Table';
import DashboardSummary from '../components/DashboardSummary';

export default function Home({ plants }) {
  return (
    <div>
      <main>
        <Layout />
        {/* Toolbar is spacer accommodating for TopBar in Layout */}
        <Toolbar />
        <DashboardSummary plants={plants} />
        <Table plants={plants} />
      </main>
      <footer>footer</footer>
    </div>
  );
}

/* Retrieves plant(s) data from mongodb database */
export async function getServerSideProps() {
  await dbConnect();

  /* find all the data in our database */
  const result = await Plant.find({});
  const plants = result.map((doc) => {
    const plant = doc.toObject();
    plant._id = plant._id.toString();

    plant.plant_propagation_date = new Date(
      plant.plant_propagation_date,
    ).toDateString();
    // plant.plant_propagation_date = plant.plant_propagation_date.toString();

    return plant;
  });

  return { props: { plants: plants } };
}
