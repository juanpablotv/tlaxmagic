import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './Register';
import Login from './Login';
import HomePage from './HomePage';
import About from './pages/About';
import Contact from './pages/Contact';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
