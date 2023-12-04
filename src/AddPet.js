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
import PetsIcon from '@mui/icons-material/Pets';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Autocomplete from '@mui/material/Autocomplete';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Dashboard from "./Dashboard.js";
import { Link as RouterLink } from 'react-router-dom';
import { Link as MUILink} from '@mui/material';
import MyPets from "./MyPets";

const defaultTheme = createTheme();

// Define pet_options
// Define pet_options
const petTypeOptions = [
    "Dog",
    "Cat",
    "Fish",
    "Bird",
    "Hamster",
    "Rabbit",
    "Guinea Pig",
    "Snake",
    "Turtle",
    "Lizard",
    "Ferret",
    "Horse",
    "Chinchilla",
    "Parrot",
    "Mouse",
    "Rat",
    "Gerbil",
    "Frog",
    "Hermit Crab",
    "Hedgehog",
    "Ferret",
    "Iguana",
    "Goldfish",
    "Canary",
    "Parakeet",
    "Cockatiel",
    "Tarantula",
    "Betta Fish",
    "Guppy",
    "Tortoise",
    "Sugar Glider",
    "Axolotl",
    "Ferret",
    "Bunny",
    "Pig",
    "Gecko",
    "Koi Fish",
    "Ferret",
    "Snail",
    "Miniature Horse",
    "Teacup Pig",
    "Toucan",
    "Skunk",
    "Squirrel",
    "Owl",
    "Ferret",
    "Armadillo",
    "Duck",
    "Penguin",
    "Bat",
];

const petSpeciesOptions= [
    "Maltipoo",
    "Siamese",
    "Golden Retriever",
    "Persian",
    "Beagle",
    "Ragdoll",
];


export default function AddPet() {
    const handleSubmit = (event) => {



        /*event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            petType: data.get('petType'),
            age: data.get('age'),
            picture: data.get('picture'), // This will contain the File object
        });*/
        event.preventDefault();

        //localStorage.clear();

        // Get existing items from local storage
        const existingItems = JSON.parse(localStorage.getItem('pets')) || [];

        const petData = {
            petID: existingItems.length > 0 ? Math.max(...existingItems.map(item => item.petID)) + 1 : 0, //document.getElementById('petID').value,
            petName: document.getElementById('name').value,
            species: document.getElementById('petSpecies').value,
            type: document.getElementById('petType').value,
            age: document.getElementById('age').value,
            picture: document.getElementById('picture').files[0].name,
        }

        existingItems[petData.petID] = petData;

        //console.log(existingItems);

        localStorage.setItem('pets', JSON.stringify(existingItems));
        //localStorage.clear();
    };

    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xl" sx={{ padding: 0, margin: 'auto', height: '100vh', alignItems: 'center', bgcolor: '#dbead2' }}>
                <CssBaseline />
                <AppBar position="fixed">
                                                  <Toolbar sx={{ height: '100%', bgcolor: "#327155"  }}>
                                                      <MUILink component={RouterLink} to="/Dashboard">
                                                      <IconButton edge="start" color="white" aria-label="back">
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
                        <PetsIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Add Pet
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="name"
                                    label="Name"
                                    name="name"
                                    type="text"
                                    autoComplete="off"
                                />
                            </Grid>
                            <Grid item xs={12} >
                                <Autocomplete
                                    freeSolo
                                    id="petType"
                                    disableClearable
                                    options={petTypeOptions}
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            label="Pet Type"
                                            InputProps={{
                                                ...params.InputProps,
                                                type: 'search',
                                            }}
                                        />
                                    )}
                                />
                            </Grid>
                            <Grid item xs={12} >
                                <Autocomplete
                                    freeSolo
                                    id="petSpecies"
                                    disableClearable
                                    options={petSpeciesOptions}
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            label="Pet Species"
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
                            Add Pet
                        </Button>

                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <MUILink href="/MyPets" variant="body2" sx={{ color: '#327155' }}>
                                    Back to My Pets
                                </MUILink>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}
