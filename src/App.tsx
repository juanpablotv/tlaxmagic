import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './Register';
import Login from './Login';
import HomePage from './HomePage';
import About from './pages/About';
import Contact from './pages/Contact';
import ForgotPassword from './ForgotPassword';
import Mapa from './pages/mapa';
import Huamantla from './pages/Huamantla';
import Ixtenco from './pages/Ixtenco';
import Tlaxco from './pages/Tlaxco';
import TradiHuamantla from './pages/tradiHuamantla';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/forgotpassword" element={<ForgotPassword/>}/>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/mapa" element={<Mapa />} />
        <Route path="/huamantla" element={<Huamantla />} />
        <Route path="/ixtenco" element={<Ixtenco />} />
        <Route path="/tlaxco" element={<Tlaxco />} />
        <Route path="/tradiHuamantla" element={<TradiHuamantla />} />

      </Routes>
    </Router>
  );
};

export default App;
