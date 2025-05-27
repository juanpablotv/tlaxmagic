import React from "react";

const Contact: React.FC = () => {
    return (
        <div className="max-w-2xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4 text-center">Contáctanos</h1>
        <p className="mb-4 text-lg">
            ¿Tienes alguna duda o quieres más información sobre nuestras
            reservaciones en los Pueblos Mágicos de Tlaxcala? Estamos aquí para ayudarte.
        </p>
        <ul className="mb-6 text-md">
            <li><strong>Email:</strong> contacto@tlaxmagic.mx</li>
            <li><strong>Teléfono:</strong> +52 246 123 4567</li>
            <li><strong>Dirección:</strong> Calle Turismo #45, Tlaxcala Centro, Tlax.</li>
        </ul>
        <p className="text-md">
            También puedes seguirnos en redes sociales para conocer más sobre nuestros destinos mágicos.
        </p>
        </div>
    );
};

export default Contact;
