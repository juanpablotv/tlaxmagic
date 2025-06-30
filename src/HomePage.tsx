import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';


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
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 text-black p-10">
      {/* Encabezado */}
      <header className="text-center mb-10">
        <h1 className="text-5xl font-extrabold text-blue-800">MagicTlax</h1>
        <p className="text-gray-600 text-lg mt-3">
          Descubre los pueblos mágicos de Tlaxcala
        </p>
        <div className="flex justify-center gap-4 mt-5">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/about')}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700"
          >
            About
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/contact')}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700"
          >
            Contact
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/mapa')}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700"
          >
            Mapa
          </motion.button>


          <button
          onClick={handleLogout}
          className="absolute right-0 top-0 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Cerrar sesión
        </button>
        </div>
      </header>

      {/* Tarjetas de los pueblos */}
      <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {towns.map((town, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="rounded-2xl overflow-hidden shadow-lg cursor-pointer"
            style={{
              backgroundImage: `url(${town.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '320px',
              position: 'relative',
            }}
          >
            <div className="absolute inset-0  bg-opacity-50 flex flex-col justify-center items-center text-center p-6">
              <h2 className="text-2xl font-semibold text-white">{town.title}</h2>
              <p className="text-gray-200 mt-8 mb-4 fontsize- text-sm font-bold">{town.description}</p>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700"
                
                onClick={() => navigate('/' + town.title.toLowerCase())} // Navegar a la página del pueblo
                
              >
                Explorar
              </motion.button>
            </div>
          </motion.div>
        ))}
      </main>

      {/* Pie de página */}
      <footer className="mt-16 text-center text-gray-500 text-sm">
        © 2025 MagicTlax. Todos los derechos reservados.
      </footer>
    </div>
  );
};

export default HomePage;
