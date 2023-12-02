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
const allPlantsData = [
  {
    name: 'Rose',
    type: 'Flower',
    age: '2 years',
    picture: 'plant1.jpg',
  },
  {
    name: 'Fern',
    type: 'Fern',
    age: '1 year',
    picture: 'https://placeimg.com/202/202/nature',
  },
  {
    name: 'Snake Plant',
    type: 'Indoor',
    age: '3 years',
    picture: 'https://placeimg.com/203/203/nature',
  },
  {
    name: 'Lavender',
    type: 'Herb',
    age: '1.5 years',
    picture: 'https://placeimg.com/204/204/nature',
  },
  {
    name: 'Palm',
    type: 'Tree',
    age: '4 years',
    picture: 'https://placeimg.com/205/205/nature',
  },
  {
    name: 'Succulent',
    type: 'Cactus',
    age: '2.5 years',
    picture: 'https://placeimg.com/206/206/nature',
  },
];

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
