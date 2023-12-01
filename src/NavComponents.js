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

export const mainListItems = (
    <React.Fragment  >
        <ListItemButton sx={{ color: 'black' }}>
            <ListItemIcon sx={{ color: '#327155' }}>
                <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
        </ListItemButton>
        <ListItemButton sx={{ color: 'black' }}>
            <ListItemIcon sx={{ color: '#327155' }}>
                <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary="My Profile" />
        </ListItemButton>
        <ListItemButton sx={{ color: 'black' }}>
            <ListItemIcon sx={{ color: '#327155' }}>
                <CalendarMonthOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="My Schedule" />
        </ListItemButton>
        <ListItemButton sx={{ color: 'black' }}>
            <ListItemIcon sx={{ color: '#327155' }}>
                <PetsIcon/>
            </ListItemIcon>
            <ListItemText primary="My Pets" />
        </ListItemButton>
        <ListItemButton sx={{ color: 'black' }}>
            <ListItemIcon sx={{ color: '#327155' }}>
                <YardOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="My Plants" />
        </ListItemButton>
        <ListItemButton sx={{ color: 'black' }}>
            <ListItemIcon sx={{ color: '#327155' }}>
                <EmojiEventsOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="My Points" />
        </ListItemButton>
    </React.Fragment>
);

export const secondaryListItems = (
    <React.Fragment>
        <ListItemButton sx={{ color: 'black' }}>
            <ListItemIcon sx={{ color: '#327155' }}>
                <ListAltOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Todays To-Do List" />
        </ListItemButton>
        <ListItemButton sx={{ color: 'black' }}>
            <ListItemIcon sx={{ color: '#327155' }}>
                <AddOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Add Pet or Plant" />
        </ListItemButton>
    </React.Fragment>
);