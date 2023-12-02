import React from 'react';

import './App.css';
import HomeScreen from './HomeScreen.js';
import SignUp from "./Signup";
import Login from "./Login.js";
import Dashboard from "./Dashboard.js";
import MyProfile from "./MyProfile";
import MyPlants from "./MyPlants";
import MyPets from "./MyPets";
import AddPlant from "./AddPlant";
import AddPet from "./AddPet";
import ToDoList from "./ToDoList";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <nav>
        </nav>

        <hr />
        <Routes>
        <Route path="/" exact element={<Login />} />
        <Route path="/Signup" element={<SignUp />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/MyProfile" element={<MyProfile />} />
        <Route path="/MyPlants" element={<MyPlants />} />
        <Route path="/MyPets" element={<MyPets />} />
        <Route path="/AddPlant" element={<AddPlant />} />
        <Route path="/AddPet" element={<AddPet />} />
        <Route path="/ToDoList" element={<ToDoList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
