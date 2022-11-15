import logo from './logo.svg';
import './App.css';
import React from 'react';
import Particle from './components/Particle';
import Navigation from './components/Navigation';
import Banner from './components/Banner';
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";



function App() {
  return (
    <>
    <div className='App'>
      
    <Particle />
    <Navigation />
    <Routes>
    <Route path="/banner" element={<Banner />} />
    </Routes>

    
    </div>
    </>
  );
}

export default App;
