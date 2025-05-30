import React from 'react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-10 bg-white text-black">
      <h1 className="text-4xl font-bold text-blue-800 mb-6">Sobre MagicTlax</h1>
      <p className="text-lg text-gray-700 max-w-3xl text-center leading-relaxed">
        MagicTlax nace con el propósito de mostrar al mundo la riqueza cultural, histórica y natural de los pueblos mágicos de Tlaxcala.
        Esta plataforma busca ser un puente entre los visitantes y las comunidades locales, fomentando el turismo responsable, la apreciación de las tradiciones y la promoción del patrimonio mexicano.
        <br /><br />
        A través de imágenes, descripciones y recomendaciones, MagicTlax te invita a explorar lugares llenos de historia como Ixtenco, Huamantla y Tlaxco.
        Cada uno con su identidad propia, sus costumbres ancestrales, sus fiestas patronales y su gastronomía auténtica que ha pasado de generación en generación.
        <br /><br />
        Queremos que los viajeros no solo conozcan los destinos, sino que vivan experiencias transformadoras, convivan con su gente y comprendan el valor de lo que representa un "Pueblo Mágico".
        Tlaxcala es pequeño en tamaño, pero inmenso en tradiciones, belleza y orgullo.
        <br /><br />
        ¡Descubre con nosotros la magia que vive en cada rincón de Tlaxcala!
      </p>
    </div>
  );
};

export default About;
