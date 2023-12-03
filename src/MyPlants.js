import React from 'react';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import PlantProfile from './PlantProfile';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Dashboard from "./Dashboard.js";
import { Link as RouterLink } from 'react-router-dom';
import { Link as MUILink} from '@mui/material';

const allPlantsData = [];
const storedPlants = JSON.parse(localStorage.getItem('plants')) || [];

storedPlants.forEach(storedPlant => {
    allPlantsData.push(storedPlant);
});

//console.log(allPlantsData);

const MyPlantsPage = () => {
  return (
     <Container component="main" maxWidth="xs" sx={{ padding: 0, margin: 0, height: '100vh', overflow: 'hidden' }}>
      <CssBaseline />
      <AppBar position="fixed">
                      <Toolbar sx={{ height: '100%', bgcolor: "#327155"  }}>
                          <MUILink component={RouterLink} to="/Dashboard">
                          <IconButton edge="start" color="inherit" aria-label="back">
                              <ArrowBackIcon />
                          </IconButton>
                          </MUILink>
                          <Typography align= "left" variant="h6" component="div" sx={{ flexGrow: 1,  }}>
                              Dashboard
                          </Typography>
                      </Toolbar>
                  </AppBar>
      <Container sx={{ paddingTop: '100px' }} style={{ padding: 20 }}>
        <Grid container spacing={2}>
          {allPlantsData.map((plantData, index) => (
            <Grid item key={index} xs={2} sm={6} md={4}>
              <PlantProfile plantData={plantData} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Container>
  );
};

export default MyPlantsPage;
