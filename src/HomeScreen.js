// HomeScreen.js
import React from 'react';
import './HomeScreen.css';
import Navbar from './Navbar';

const HomeScreen = () => {
    return (
        <div className="app-container">
            <div className="side-section">
                <Navbar />
            </div>
            <div className="body-section">
            <div className="top-section">
                <img
                    src="/PPC-4.jpg" // Update with the correct path
                    alt="Top Image"
                    className="top-image"
                    autoFocus
                />
            </div>
            <div className="main-content">
                <div className="box-container">
                    <div className="box ">Box 1</div>
                    <div className="box ">Box 2</div>
                    <div className="box ">Box 3</div>
                    <div className="box ">Box 4</div>
                    <div className="box ">Box 5</div>
                    <div className="box ">Box 6</div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default HomeScreen;

