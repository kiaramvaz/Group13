import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';
import PetsIcon from '@mui/icons-material/Pets';
import YardOutlinedIcon from '@mui/icons-material/YardOutlined';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import Dashboard from "./Dashboard.js";
import MyProfile from "./MyProfile";
import MyPlants from "./MyPlants";
import MyPets from "./MyPets";
import AddPlant from "./AddPlant";
import AddPet from "./AddPet";
import ToDoList from "./ToDoList";
import { Link as RouterLink } from 'react-router-dom';
import { Link as MUILink} from '@mui/material';

export const mainListItems = (
    <React.Fragment  >
    <MUILink component={RouterLink} to="/Dashboard">
        <ListItemButton sx={{ color: 'black' }}>
            <ListItemIcon sx={{ color: '#327155' }}>
                <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
        </ListItemButton>
        </MUILink>

        <MUILink component={RouterLink} to="/MyProfile">
        <ListItemButton sx={{ color: 'black' }}>
            <ListItemIcon sx={{ color: '#327155' }}>
                <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary="My Profile" />
        </ListItemButton>
        </MUILink>

        <MUILink component={RouterLink} to="/MySchedule">
        <ListItemButton sx={{ color: 'black' }}>
            <ListItemIcon sx={{ color: '#327155' }}>
                <CalendarMonthOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="My Schedule" />
        </ListItemButton>
        </MUILink>

        <MUILink component={RouterLink} to="/MyPets">
                <ListItemButton sx={{ color: 'black' }}>
                    <ListItemIcon sx={{ color: '#327155' }}>
                        <PetsIcon />
                    </ListItemIcon>
                    <ListItemText primary="My Pets" />
                </ListItemButton>
                </MUILink>

         <MUILink component={RouterLink} to="/MyPlants">
        <ListItemButton sx={{ color: 'black' }}>
            <ListItemIcon sx={{ color: '#327155' }}>
                <YardOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="My Plants" />
        </ListItemButton>
        </MUILink>

        <MUILink component={RouterLink} to="/MyPoints">
        <ListItemButton sx={{ color: 'black' }}>
            <ListItemIcon sx={{ color: '#327155' }}>
                <EmojiEventsOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="My Points" />
        </ListItemButton>
        </MUILink>
    </React.Fragment>
);

export const secondaryListItems = (
    <React.Fragment>
        <MUILink component={RouterLink} to="/ToDoList">
        <ListItemButton sx={{ color: 'black' }}>
            <ListItemIcon sx={{ color: '#327155' }}>
                <ListAltOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Todays To-Do List" />
        </ListItemButton>
        </MUILink>
        <MUILink component={RouterLink} to="/AddPet">
        <ListItemButton sx={{ color: 'black' }}>
            <ListItemIcon sx={{ color: '#327155' }}>
                <AddOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Add Pet" />
        </ListItemButton>
        </MUILink>
        <MUILink component={RouterLink} to="/AddPlant">
                <ListItemButton sx={{ color: 'black' }}>
                    <ListItemIcon sx={{ color: '#327155' }}>
                        <AddOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Add Plant" />
                </ListItemButton>
                </MUILink>
        <MUILink component={RouterLink} to="/Login">
        <ListItemButton sx={{ color: 'black' }}>
                    <ListItemIcon sx={{ color: '#327155' }}>
                        <LogoutIcon />
                    </ListItemIcon>
                    <ListItemText primary="Logout" />
                </ListItemButton>
                </MUILink>
    </React.Fragment>
);