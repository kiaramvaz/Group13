import React from 'react';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import PetProfile from './PetProfile';
import Grid from '@mui/material/Grid';
import Dashboard from "./Dashboard.js";
import { Link as RouterLink } from 'react-router-dom';
import { Link as MUILink} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const allPetsData = [];
const storedPets = JSON.parse(localStorage.getItem('pets')) || [];

storedPets.forEach(storedPet => {
    allPetsData.push(storedPet);
});

//console.log(allPetsData);

const MyPetsPage = () => {
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
                    {allPetsData.map((petData, index) => (
                        <Grid item key={index} xs={2} sm={6} md={4}>
                            <PetProfile petData={petData} />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Container>
    );
};

export default MyPetsPage;

