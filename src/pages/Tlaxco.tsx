import React from 'react';
import { useNavigate } from 'react-router-dom';

const Tlaxco: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex h-screen bg-white">
      {/*  Barra lateral */}
      <aside className="w-64 bg-gray-100 p-4 border-r border-gray-300">
        <h2 className="text-xl font-bold mb-6">MagicTlax</h2>
        <nav className="space-y-2">
          <h3 className="text-sm text-gray-500">Descubre Tlaxcala</h3>
          <ul className="space-y-1">
            <li>
              <button onClick={() => navigate('/')} className="flex items-center w-full text-left p-2 rounded hover:bg-gray-200">
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

          <h3 className="mt-6 text-sm text-gray-500">¿Que desea conocer de Ixtenco?</h3>
          <ul className="space-y-1">
            <li>
              <button onClick={() => navigate('')} className="text-left p-2 w-full hover:bg-gray-200 rounded ">
                Tradiciones
              </button>
            </li>
            <li>
              <button onClick={() => navigate('')} className="text-left p-2 w-full hover:bg-gray-200 rounded">
                Gastronomía</button>
            </li>
            <li>
              <button onClick={() => navigate('')} className="text-left p-2 w-full hover:bg-gray-200 rounded">
                Información</button>
            </li>
          </ul>
        </nav>
      </aside>

      {/* contenido */}
      <main className="flex-1 p-6 overflow-auto">
        {/* botones de barra */}
        <div className="flex justify-between items-center mb-4">
          <div className="space-x-2">
            <button className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300">Restaurantes</button>
            <button className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300">Hoteles</button>
            <button className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300">Cosas que hacer</button>
          </div>
          <button
            onClick={() => navigate('/mapa')}
            className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition"
          >
            Regresar
          </button>
        </div>

        {/* Titulo y mapa */}
        <h1 className="text-3xl font-bold text-gray-800">Tlaxco</h1>
        <p className="text-gray-600 mb-4">Mapa del municipio</p>

        <div className="rounded-2xl overflow-hidden shadow-lg max-w-full">
          <img
            src="/images/mapaTlaxco.png"
            alt="Mapa de Tlaxco "
            className="w-full h-auto"
          />
        </div>
      </main>
    </div>
  );
};

export default Tlaxco;
