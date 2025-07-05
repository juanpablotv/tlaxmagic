import React from 'react';
import { useNavigate } from 'react-router-dom';

const Tradiciones: React.FC = () => {
  const navigate = useNavigate();

  const tradiciones = [
    {
      titulo: 'La Noche que Nadie Duerme',
      descripcion: 'Celebrada en agosto durante la feria de Huamantla, esta tradición consiste en la elaboración de alfombras de aserrín multicolor que decoran las calles por donde pasa la imagen de la Virgen de La Caridad en una procesión nocturna.',
      imagen: ''
    },
    {
      titulo: 'Feria de Huamantla',
      descripcion: 'Es una de las ferias más importantes del estado, se celebra en honor a la Virgen de La Caridad durante el mes de agosto e incluye corridas de toros, juegos mecánicos, eventos culturales y religiosos.',
      imagen: '/tradiciones/feria-huamantla.jpg'
    },
    {
      titulo: 'Huamantlada',
      descripcion: 'Inspirada en los Sanfermines, esta tradición involucra la suelta de toros por las calles del centro de Huamantla. Es un evento muy esperado pero también controversial.',
      imagen: '/tradiciones/huamantlada.jpg'
    },
    {
      titulo: 'El Desfile de las Flores',
      descripcion: 'Durante las festividades de agosto, se realiza un desfile con carros alegóricos decorados con flores y motivos religiosos.',
      imagen: '/tradiciones/desfile-flores.jpg'
    }
  ];

  return (
    <div className="flex">
      {/* Barra lateral izquierda */}
      <aside className="w-64 bg-white border-r p-4 min-h-screen">
        <h2 className="text-lg font-bold mb-4">TlaxMagia</h2>
        <nav className="flex flex-col gap-2">
          <button onClick={() => navigate('/')} className="text-left hover:text-blue-500">Home</button>
          <button onClick={() => navigate('/buscar')} className="text-left hover:text-blue-500">Buscar</button>
          <button onClick={() => navigate('/zonas')} className="text-left hover:text-blue-500">Zonas Turísticas</button>

        

          <h3 className="mt-4 font-semibold">Categorías</h3>
          <button onClick={() => navigate('/tradiciones')} className="text-left hover:text-blue-500 font-bold">Tradiciones</button>
          <button onClick={() => navigate('/gastronomia')} className="text-left hover:text-blue-500">Gastronomía</button>
          <button onClick={() => navigate('/informacion')} className="text-left hover:text-blue-500">Información</button>
        </nav>
      </aside>

      {/* Contenido principal */}
      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-4">Tradiciones de Huamantla</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tradiciones.map((tradicion, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={tradicion.imagen}
                alt={tradicion.titulo}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-bold mb-2">{tradicion.titulo}</h2>
                <p className="text-gray-600 text-sm">{tradicion.descripcion}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Tradiciones;