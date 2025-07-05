import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import '@fontsource/raleway/700.css';

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("session");
    navigate("/login");
  };

  const towns = [
    {
      title: 'Ixtenco',
      description:
        'Pueblo otomí que destaca por su riqueza cultural, artesanías y la iglesia de San Juan Bautista.',
      image: '/images/ixtenco2.jpg',
    },
    {
      title: 'Huamantla',
      description:
        'Conocido por sus tapetes de aserrín, la feria y la Basílica de la Caridad, Huamantla es historia y tradición.',
      image: '/images/huamantla.jpeg',
    },
    {
      title: 'Tlaxco',
      description:
        'Rodeado de bosques y haciendas, Tlaxco ofrece experiencias únicas con arquitectura colonial y queserías.',
      image: '/images/tlaxco2.jpg',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-yellow-100 to-green-100 text-black p-10 font-raleway">
      {/* Encabezado */}
      <header className="text-center mb-10">
        <motion.h1 
          className="text-5xl font-extrabold text-pink-700 drop-shadow-lg"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          ✨ MagicTlax ✨
        </motion.h1>
        <p className="text-gray-700 text-lg mt-3">
          Descubre los pueblos mágicos de Tlaxcala
        </p>
        <div className="flex justify-center gap-4 mt-5">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/about')}
            className="bg-pink-600 text-white px-4 py-2 rounded-lg shadow hover:bg-pink-700"
          >
            About
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/contact')}
            className="bg-green-600 text-white px-4 py-2 rounded-lg shadow hover:bg-green-700"
          >
            Contact
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/mapa')}
            className="bg-yellow-500 text-white px-4 py-2 rounded-lg shadow hover:bg-yellow-600"
          >
            Mapa
          </motion.button>

          <button
            onClick={handleLogout}
            className="absolute right-5 top-5 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Cerrar sesión
          </button>
        </div>
      </header>

      {/* Tarjetas de los pueblos */}
      <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {towns.map((town, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="rounded-2xl overflow-hidden shadow-xl cursor-pointer border-4 border-pink-200 hover:border-pink-400"
            style={{
              backgroundImage: `url(${town.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '340px',
              position: 'relative',
            }}
          >
            <div className="absolute inset-0  bg-opacity-50 flex flex-col justify-center items-center text-center p-6">
              <h2 className="text-3xl font-bold text-white drop-shadow">{town.title}</h2>
              <p className="text-white mt-4 mb-6 text-sm font-semibold drop-shadow-md">
                {town.description}
              </p>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="bg-white text-pink-700 px-4 py-2 rounded-full font-bold hover:bg-pink-100"
                onClick={() => navigate('/' + town.title.toLowerCase())}
              >
                Explorar
              </motion.button>
            </div>
          </motion.div>
        ))}
      </main>

      {/* Pie de página */}
      <footer className="mt-16 text-center text-gray-600 text-sm">
        © 2025 MagicTlax. Todos los derechos reservados.
      </footer>
    </div>
  );
};

export default HomePage;
