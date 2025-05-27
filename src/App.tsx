import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import Contact from './Contact';
import About from './About';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/acercade" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
