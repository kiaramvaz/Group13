import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import{ Link as MUILink} from '@mui/material';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {Profiler} from "react";
import Person2SharpIcon from '@mui/icons-material/Person2Sharp';
import { Link as RouterLink } from 'react-router-dom';
import Dashboard from "./Dashboard";
import { useNavigate } from 'react-router-dom';


// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignUp() {
    const navigate = useNavigate();
    const [formData, setFormData] = React.useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        retype: '',
    });

    const [errors, setErrors] = React.useState({});

    const validateForm = () => {
        const newErrors = {};

        if (!formData.firstName.trim()) {
            newErrors.firstName = 'First Name is required';
        }

        if (!formData.lastName.trim()) {
            newErrors.lastName = 'Last Name is required';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
            newErrors.email = 'Invalid email format';
        } else if(formData.email.length < 8 || formData.email.length > 50){
            newErrors.email = 'Invalid email length';
        }

        if (!formData.password.trim()) {
            newErrors.password = 'Password is required';
        } else if(formData.password.length < 8 || formData.password.length > 12){
            newErrors.password = 'Password must be between 8 and 12 characters. ';
        } else if (!/(?=.*[0-9])/.test(formData.password)) {
            newErrors.password = 'Password must contain at least one numerical value';
        }
        else if (!/(?=.*[!@#$%^&*])/.test(formData.password)) {
            newErrors.password = 'Password must contain at least one special character ';
        }

        if(!formData.retype.trim()){
            newErrors.retype = 'Retyped password is required';
        } else if (formData.password !== formData.retype) {
            newErrors.retype = 'Passwords do not match';
        }




        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const handleValidate = () => {
        if (validateForm()) {
            console.log('Form is valid!');
            return true;
        } else {
            console.log('Form validation failed');
            return false;
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (handleValidate()) {

            // Perform any other logic (e.g., API call, redirect, etc.)
            console.log('Form submitted successfully');
            console.log(formData);
            localStorage.setItem('userData', JSON.stringify(formData));
            navigate("/Dashboard");
        } else {
            console.log('Form validation failed');
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };



    return (
      <ThemeProvider theme={defaultTheme} >
          <Container component="main" maxWidth="xl" sx={{ padding: 0, margin: 'auto', height: '100vh', alignItems: 'center' , bgcolor: '#dbead2' }} >
              <CssBaseline />
              <Box
                sx={{
                    margin: 'auto',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',



                }}
              >
                  <Avatar sx={{ m: 1, bgcolor: '#327155', marginTop: 8 }}>
                      <Person2SharpIcon />
                  </Avatar>
                  <Typography component="h1" variant="h5">
                      Sign up
                  </Typography>
                  <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                      <Grid container spacing={2}>
                          <Grid item xs={12} sm={6}>
                              <TextField
                                autoComplete="given-name"
                                name="firstName"
                                required
                                fullWidth
                                id="firstName"
                                label="First Name"
                                autoFocus
                                value={formData.firstName}
                                onChange={handleChange}
                                error={!!errors.firstName}
                                helperText={errors.firstName}
                              />
                          </Grid>
                          <Grid item xs={12} sm={6}>
                              <TextField
                                required
                                fullWidth
                                id="lastName"
                                label="Last Name"
                                name="lastName"
                                autoComplete="family-name"
                                value={formData.lastName}
                                onChange={handleChange}
                                error={!!errors.lastName}
                                helperText={errors.lastName}
                              />
                          </Grid>
                          <Grid item xs={12}>
                              <TextField
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                value={formData.email}
                                onChange={handleChange}
                                error={!!errors.email}
                                helperText={errors.email}
                              />
                          </Grid>
                          <Grid item xs={12}>
                              <TextField
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="new-password"
                                value={formData.password}
                                onChange={handleChange}
                                error={!!errors.password}
                                helperText={errors.password}
                              />
                          </Grid>
                          <Grid item xs={12}>
                              <TextField
                                required
                                fullWidth
                                name="retype"
                                label="Retype Password"
                                type="password"
                                id="retypePassword"
                                autoComplete="new-password"
                                value={formData.retype}
                                onChange={handleChange}
                                error={!!errors.retype}
                                helperText={errors.retype}
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
                            bgcolor: '#99a98f',
                            '&:hover': {
                                bgcolor: '#3A6152',
                            },

                        }}
                        onClick={handleValidate}

                      >
                          Sign In
                      </Button>


                      <Grid container justifyContent="flex-end">
                          <Grid item>
                              <MUILink href="/Login" variant="body2" sx={{color: '#327155',}}>
                                  Already have an account? Sign in
                              </MUILink>
                          </Grid>
                      </Grid>
                  </Box>
              </Box>
          </Container>
      </ThemeProvider>
    );
}