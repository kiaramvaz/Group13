// Navbar.js
import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className="navbar">
            <button className="nav-button">Home</button>
            <button className="nav-button">My Profile</button>
            <button className="nav-button">My Pets</button>
            <button className="nav-button">My Plants</button>
            <button className="nav-button">My Schedule</button>
        </div>
    );
};

export default Navbar;
