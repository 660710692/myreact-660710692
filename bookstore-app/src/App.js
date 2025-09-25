import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar';
// import Footer from './components/Footer';

import HomePage from './pages/HomePage';
import BookPage from './pages/BookPage';
import NotFound from './components/NotFound';
import CategoryPage from './pages/Category';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';


function App() {
  return (
    <div className="App">
      {}
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/category/fiction" element={<CategoryPage />} />        
          <Route path="/books" element={<BookPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
{/*       
      <Footer /> */}
    </div>
  );
}

export default App;