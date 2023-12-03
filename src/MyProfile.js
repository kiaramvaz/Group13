import React from 'react';
import Avatar from '@mui/material/Avatar';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Dashboard from "./Dashboard.js";
import { Link as RouterLink } from 'react-router-dom';
import { Link as MUILink} from '@mui/material';

const UserProfile = () => {
    // Sample user data
    const userData = {
        name: 'John Doe',
        email: 'john@example.com',
        age: 30,
        phoneNumber: '+1 123-456-7890',
        //address: '123 Main St, City, Country', // Sample address
        profilePicture: 'https://placekitten.com/150/150', // Sample profile picture URL
    };

    return (
        <Container component="main" maxWidth="xl" sx={{ padding: 0, margin: 'auto', height: '100vh', overflow: 'hidden', bgcolor: '#dbead2' }}>
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
            <Container
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    mt: 4,
                    paddingTop: '100px', // Adjust spacing to account for the fixed AppBar
                }}
            >
                <Typography variant="h5" component="div" sx={{ color: '#327155', marginY: 2 }}>
                    My Profile
                </Typography>
                <Avatar alt={userData.name} src={userData.profilePicture} sx={{ width: 150, height: 150 }} />
                <Typography component="h1" variant="h4" sx={{ mt: 2, color: '#327155', fontSize: '24px' }}>
                    {userData.name}
                </Typography>
                <Typography component="p" variant="subtitle1" sx={{ color: '#327155', mt: 1, fontSize: '20px' }}>
                    {userData.email}
                </Typography>
                <Typography component="p" variant="body1" sx={{ color: 'text.primary', mt: 1, fontSize: '18px' }}>
                    {userData.address}
                </Typography>
                <Typography component="p" variant="body1" sx={{ color: 'text.primary', mt: 1, fontSize: '18px' }}>
                    Age: {userData.age}
                </Typography>
                <Typography component="p" variant="body1" sx={{ color: 'text.primary', mt: 1, fontSize: '18px' }}>
                    Phone Number: {userData.phoneNumber}
                </Typography>
            </Container>
        </Container>
    );
};

export default UserProfile;
