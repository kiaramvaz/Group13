import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import Autocomplete from '@mui/material/Autocomplete';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Dashboard from "./Dashboard.js";
import { Link as RouterLink } from 'react-router-dom';
import { Link as MUILink} from '@mui/material';
const defaultTheme = createTheme();

// Define house_plants
const house_plants = [
    "Spider Plant",
    "Snake Plant",
    "Pothos",
    "Peace Lily",
    "Monstera",
    "ZZ Plant",
    "Fiddle Leaf Fig",
    "Rubber Plant",
    "Aloe Vera",
    "Succulent",
    "Philodendron",
    "Dieffenbachia",
    "Parlor Palm",
    "English Ivy",
    "Calathea",
    "Devil's Ivy",
    "Jade Plant",
    "African Violet",
    "Bamboo Palm",
    "Boston Fern",
    "Chinese Evergreen",
    "Dracaena",
    "Money Tree",
    "Orchid",
    "Ficus Elastica",
    "Hoya",
    "Bird of Paradise",
    "Aglaonema",
    "Nerve Plant",
    "String of Pearls",
    "Peperomia",
    "Cactus",
    "African Mask Plant",
    "Fern",
    "Croton",
    "Majesty Palm",
    "Dumb Cane",
    "Golden Pothos",
    "Zebra Plant",
    "Schefflera",
    "Swiss Cheese Plant",
    "Moth Orchid",
    "Begonia",
    "Tradescantia",
    "Kalanchoe",
    "Pilea",
    "Fern",
    "Air Plant"
]


export default function AddPlant() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            generalName: data.get('generalName'),
            age: data.get('age'),
            picture: data.get('picture'), // This will contain the File object
        });
    };

    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xl" sx={{ padding: 0, margin: 'auto', height: '100vh', alignItems: 'center', bgcolor: '#dbead2' }}>
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
                <Box
                    sx={{
                        margin: 'auto',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: '#327155', marginTop: 8 }}>
                        <LocalFloristIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Add Plant
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} >
                                <Autocomplete
                                    freeSolo
                                    id="generalName"
                                    disableClearable
                                    options={house_plants}
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            label="General Name"
                                            InputProps={{
                                                ...params.InputProps,
                                                type: 'search',
                                            }}
                                        />
                                    )}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="age"
                                    label="Age"
                                    name="age"
                                    type="text"
                                    autoComplete="off"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <input
                                    accept="image/jpeg"
                                    id="picture"
                                    name="picture"
                                    type="file"
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{
                                mt: 3,
                                mb: 2,
                                bgcolor: '#327155',
                                '&:hover': {
                                    bgcolor: '#fff4e9',
                                    color: '#327155',
                                },
                            }}
                        >
                            Add Plant
                        </Button>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link href="#" variant="body2" sx={{ color: '#327155' }}>
                                    Back to My Plants
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}
