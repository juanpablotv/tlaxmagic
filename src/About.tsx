import React from "react";

const About: React.FC = () => {
    return (
        <div className="max-w-2xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4 text-center">Acerca de TlaxMagic</h1>
        <p className="mb-4 text-lg">
            En <strong>TlaxMagic</strong>, nuestra misión es conectar a viajeros con la riqueza cultural, histórica y natural de los Pueblos Mágicos de Tlaxcala. 
        </p>
        <p className="mb-4 text-md">
            Ofrecemos una plataforma sencilla y segura para reservar visitas a destinos turísticos únicos, desde pueblos llenos de historia hasta paisajes que te quitarán el aliento. Nos apasiona promover el turismo local y apoyar a las comunidades que hacen de estos lugares algo realmente especial.
        </p>
        <p className="text-md">
            ¡Explora Tlaxcala como nunca antes con TlaxMagic!
        </p>
        </div>
    );
};

export default About;
