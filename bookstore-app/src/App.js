import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar';
// import Footer from './components/Footer';

import HomePage from './pages/HomePage';
import NotFound from './components/NotFound';


function App() {
  return (
    <div className="App">
      {}
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
{/*       
      <Footer /> */}
    </div>
  );
}

export default App;