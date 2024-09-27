import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Sidenav from './Drawer';
import Navbar from './Component/Navbar';
import Footer from './Component/Footer';
import About from './pages/about';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Discussion from './pages/Discussion form';
import Job from './pages/Job board';
import Announcement from './pages/Announcement & news';
import Groups from './pages/Groups & clubs';
import Resources from './pages/Resources';
import Alumni from './pages/Alumni pages';
import Pic from './pages/Pic';
import { Component } from 'react';


function App() {
  return (
    <BrowserRouter>
        <Routes>
              <Route path="/" Component={Home} />
              <Route path="/About" Component={About} />
              <Route path="/Contact" Component={Contact} />
              <Route path="/Discussion" Component={Discussion} />
              <Route path="/Job" Component={Job} />
              <Route path="/Announcement" Component={Announcement} />
              <Route path="/Groups" Component={Groups} />
              <Route path="/Resources" Component={Resources} />
              <Route path="/Alumni" Component={Alumni} />
              <Route path="/Pic" Component={Pic} />

             
        </Routes>
    </BrowserRouter>
   
   
  );
}

export default App;
