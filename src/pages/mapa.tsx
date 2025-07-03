import React from 'react';
import { useNavigate } from 'react-router-dom';

const Mapa: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex h-screen bg-white">
      {/* barra de la izquierda */}
      <aside className="w-64 bg-gray-100 p-4 border-r border-gray-300">
        <h2 className="text-xl font-bold mb-6">MagicTlax</h2>
        <nav className="space-y-2">
          <h3 className="text-sm text-gray-500">Descubre Tlaxcala</h3>
          <ul className="space-y-1">
            <li>
              <button
                onClick={() => navigate('/')}
                className="flex items-center w-full text-left p-2 rounded hover:bg-gray-200"
              >
                <span className="mr-2">🏠</span> Home
              </button>
            </li>
            <li>
              <button className="flex items-center w-full text-left p-2 rounded hover:bg-gray-200">
                <span className="mr-2">🔍</span> Buscar
              </button>
            </li>
            <li>
              <button className="flex items-center w-full text-left p-2 rounded hover:bg-gray-200">
                <span className="mr-2">📍</span> Zonas Turísticas
              </button>
            </li>
          </ul>
          <h3 className="mt-6 text-sm text-gray-500">Pueblos Mágicos</h3>
          <ul className="space-y-1">
            <li>
              <button onClick={() => navigate('/huamantla')} className="text-left p-2 w-full hover:bg-gray-200 rounded">Huamantla</button>
            </li>
            <li>
              <button onClick={() => navigate('/ixtenco')} className="text-left p-2 w-full hover:bg-gray-200 rounded">Ixtenco</button>
            </li>
            <li>
              <button onClick={() => navigate('/tlaxco')} className="text-left p-2 w-full hover:bg-gray-200 rounded">Tlaxco</button>
            </li>
          </ul>
        </nav>
      </aside>

      {/* comtenido principal */}
      <main className="flex-1 p-6 overflow-auto">
        {/* barra superior  */}
        <div className="flex justify-between items-center mb-4">
          <div className="space-x-2">
            <button className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300">Restaurantes</button>
            <button className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300">Hoteles</button>
            <button className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300">Cosas que hacer</button>
          </div>
          <button
            onClick={() => navigate('/')}
            className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition"
          >
            Regresar
          </button>
        </div>

        {/* Titulo y mapa */}
        <h1 className="text-3xl font-bold text-gray-800">Tlaxcala</h1>
        <p className="text-gray-600 mb-4">Mapa del estado</p>

        <div className="rounded-2xl overflow-hidden shadow-lg max-w-full">
          <img
            src="/images/tlaxcala.png" // Cambiar imagen por una Api
            alt="Mapa de Tlaxcala"
            className="w-full h-auto"
          />
        </div>
      </main>
    </div>
  );
};

export default Mapa;
