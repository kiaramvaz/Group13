import React from 'react';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import PetProfile from './PetProfile';
import Grid from '@mui/material/Grid';


const allPetsData = [
    {
        name: 'Bella',
        species: 'Cat',
        age: 3,
        picture: 'https://placekitten.com/201/201',
    },
    {
        name: 'Charlie',
        species: 'Dog',
        age: 4,
        picture: 'https://placekitten.com/202/202',
    },
    {
        name: 'Daisy',
        species: 'Dog',
        age: 1,
        picture: 'https://placekitten.com/203/203',
    },
    {
        name: 'Oliver',
        species: 'Cat',
        age: 2,
        picture: 'https://placekitten.com/204/204',
    },
    {
        name: 'Milo',
        species: 'Dog',
        age: 5,
        picture: 'https://placekitten.com/205/205',
    },
    {
        name: 'Lola',
        species: 'Cat',
        age: 1,
        picture: 'https://placekitten.com/206/206',
    },
];

const MyPetsPage = () => {
    return (
        <Container component="main" maxWidth="xs" sx={{ padding: 0, margin: 0, height: '100vh', overflow: 'hidden' }}>
            <CssBaseline />
            <AppBar position="fixed">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        My Pets
                    </Typography>
                </Toolbar>
            </AppBar>
            <Container sx={{ paddingTop: '100px' }}>
                <Grid container spacing={2} justifyContent="center" sx={{ width: '100%' }}>
                    {allPetsData.map((petData, index) => (
                        <Grid item key={index} xs={12} sm={6} md={4}>
                            <PetProfile petData={petData} />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Container>
    );
};
export default MyPetsPage;

