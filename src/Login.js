
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Link as MUILink} from '@mui/material';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Dashboard from "./Dashboard";
import { Link as RouterLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const defaultTheme = createTheme();

export default function SignInSide() {
  const navigate = useNavigate();
  const [formData, setFormData] = React.useState({

    email: '',
    password: '',

  });

  const [errors, setErrors] = React.useState({});

  const validateForm = () => {
    const newErrors = {};

    const storedUserData = JSON.parse(localStorage.getItem('userData'));
    if(storedUserData){
      if (!formData.email.trim()) {
        newErrors.email = 'Email is required';
      } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
        newErrors.email = 'Invalid email format';
      } else if (formData.email !== storedUserData.email ) {
        newErrors.email = 'Invalid email or email not found'; // Add a general error for mismatch
      }

      if (!formData.password.trim()) {
        newErrors.password = 'Password is required';
      }else if(formData.password !== storedUserData.password){
        newErrors.password = 'Invalid password';
      }
    }else{
      newErrors.general = 'No Account found';
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
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(/PPC-3.jpg)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: '#99a98f' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                value={formData.email}
                onChange={handleChange}
                error={!!errors.email}
                helperText={errors.email}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={formData.password}
                onChange={handleChange}
                error={!!errors.password}
                helperText={errors.password}
              />

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
              <Grid container>
                <Grid item xs>
                </Grid>
                <Grid item>
                  <MUILink href="/Signup" variant="body2" sx={{color: '#99a98f',}}>
                    {"Don't have an account? Sign Up"}
                  </MUILink>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}