import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaHome, FaMapMarkedAlt, FaInfoCircle, FaPhoneAlt, FaSignOutAlt } from 'react-icons/fa';
import '@fontsource/raleway/300.css';

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const handleLogout = () => {
    localStorage.removeItem("session");
    navigate("/login");
  };

  const towns = [
    {
      title: 'Ixtenco',
      description: 'Pueblo otomí que destaca por su riqueza cultural, artesanías y la iglesia de San Juan Bautista.',
      image: '/images/ixtenco2.jpg',
    },
    {
      title: 'Huamantla',
      description: 'Conocido por sus tapetes de aserrín, la feria y la Basílica de la Caridad, Huamantla es historia y tradición.',
      image: '/images/huamantla.jpeg',
    },
    {
      title: 'Tlaxco',
      description: 'Rodeado de bosques y haciendas, Tlaxco ofrece experiencias únicas con arquitectura colonial y queserías.',
      image: '/images/tlaxco2.jpg',
    },
  ];

  return (
    <div className="flex min-h-screen font-raleway">
      {/* Sidebar */}
      <motion.aside
        initial={{ width: 260 }}
        animate={{ width: isSidebarOpen ? 260 : 80 }}
        className="bg-gradient-to-b from-yellow-200 via-pink-100 to-green-100 text-gray-800 shadow-xl transition-all duration-500 overflow-hidden fixed h-full z-20"
      >
        <div className="flex items-center justify-between px-4 py-6">
          {isSidebarOpen && <h2 className="text-2xl font-extrabold text-pink-700">MagicTlax</h2>}
          <button onClick={() => setSidebarOpen(!isSidebarOpen)} className="text-gray-600 hover:text-gray-900">
            {isSidebarOpen ? '⮜' : '⮞'}
          </button>
        </div>
        <nav className="flex flex-col gap-4 px-4">
          <button onClick={() => navigate('/')} className="flex items-center gap-3 py-2 hover:text-pink-600">
            <FaHome /> {isSidebarOpen && 'Inicio'}
          </button>
          <button onClick={() => navigate('/about')} className="flex items-center gap-3 py-2 hover:text-pink-600">
            <FaInfoCircle /> {isSidebarOpen && 'Acerca de'}
          </button>
          <button onClick={() => navigate('/contact')} className="flex items-center gap-3 py-2 hover:text-pink-600">
            <FaPhoneAlt /> {isSidebarOpen && 'Contacto'}
          </button>
          <button onClick={() => navigate('/mapa')} className="flex items-center gap-3 py-2 hover:text-pink-600">
            <FaMapMarkedAlt /> {isSidebarOpen && 'Mapa'}
          </button>
          <button onClick={handleLogout} className="flex items-center gap-3 py-2 mt-10 text-red-600 hover:text-red-800">
            <FaSignOutAlt /> {isSidebarOpen && 'Cerrar sesión'}
          </button>
        </nav>
      </motion.aside>

      {/* Main content */}
      <div className={`ml-[${isSidebarOpen ? '260px' : '80px'}] w-full transition-all duration-500 p-8 bg-[url('/images/bg-oldpaper.jpg')] bg-cover bg-fixed bg-center`}>        
        <header className="text-center mb-10">
          <motion.h1
            className="text-5xl font-light text-brown-900 drop-shadow-md"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            ✨ Bienvenid@ a MagicTlax ✨
          </motion.h1>
          <p className="text-brown-700 text-md mt-3 italic">Explora los pueblos mágicos con historia y encanto</p>
        </header>

        <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {towns.map((town, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="rounded-2xl overflow-hidden shadow-lg border border-brown-300 bg-white bg-opacity-90 backdrop-blur-sm"
            >
              <div
                className="h-48 bg-cover bg-center"
                style={{ backgroundImage: `url(${town.image})` }}
              ></div>
              <div className="p-5">
                <h2 className="text-xl font-semibold text-brown-800">{town.title}</h2>
                <p className="text-sm text-brown-600 mt-2">{town.description}</p>
                <button
                  onClick={() => navigate(`/${town.title.toLowerCase()}`)}
                  className="mt-4 bg-pink-600 text-white px-4 py-2 rounded-lg shadow hover:bg-pink-700 transition"
                >
                  Explorar
                </button>
              </div>
            </motion.div>
          ))}
        </main>

        <footer className="mt-16 text-center text-gray-600 text-sm">
          © 2025 MagicTlax. Todos los derechos reservados.
        </footer>
      </div>
    </div>
  );
};

export default HomePage;
