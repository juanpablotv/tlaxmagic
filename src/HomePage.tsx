import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// Definición local de los componentes Card y CardContent
type CardProps = {
  children: React.ReactNode;
  className?: string;
};

const Card: React.FC<CardProps> = ({ children, className = '' }) => (
  <div className={`rounded-2xl shadow-lg bg-white ${className}`}>
    {children}
  </div>
);

const CardContent: React.FC<CardProps> = ({ children, className = '' }) => (
  <div className={`p-4 ${className}`}>
    {children}
  </div>
);

const HomePage: React.FC = () => {
  const towns = [
    {
      title: 'Ixtenco',
      description:
        'Pueblo otomí que destaca por su riqueza cultural, artesanías y la iglesia de San Juan Bautista.',
    },
    {
      title: 'Huamantla',
      description:
        'Conocido por sus tapetes de aserrín, la feria y la Basílica de la Caridad, Huamantla es historia y tradición.',
    },
    {
      title: 'Tlaxco',
      description:
        'Rodeado de bosques y haciendas, Tlaxco ofrece experiencias únicas con arquitectura colonial y queserías.',
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold text-purple-500">TlaxMagic</h1>
        <p className="text-blue-400 text-lg mt-2">
          Descubre los pueblos mágicos de Tlaxcala
        </p>
      </header>

      <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {towns.map((town, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="text-black cursor-pointer">
              <CardContent>
                <h2 className="text-xl font-semibold text-purple-600">
                  {town.title}
                </h2>
                <p className="text-gray-800 mt-2">{town.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </main>

      
      <div className="flex space-x-4 mt-6">
        <Link to="/contacto">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-xl hover:bg-blue-600">
            Contáctanos
          </button>
        </Link>
        <Link to="/acercade">
          <button className="bg-green-500 text-white px-4 py-2 rounded-xl hover:bg-green-600">
            Acerca de
          </button>
        </Link>
      </div>

      <footer className="mt-12 text-center text-gray-500 text-sm">
        © 2025 TlaxMagic. Todos los derechos reservados.
      </footer>

    </div>
  );
};

export default HomePage;
