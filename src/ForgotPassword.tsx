import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ForgotPassword: React.FC = () => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleRecovery = (e: React.FormEvent) => {
        e.preventDefault();

        const storedUser = localStorage.getItem("user");

        if (!storedUser) {
        setError("No hay ningún usuario registrado en el sistema.");
        return;
        }

        const parsedUser = JSON.parse(storedUser);

        if (parsedUser.email === email) {
        // Simulación de recuperación
        setMessage("Te hemos enviado un enlace de recuperación a tu correo electrónico (simulado).");
        setError("");
        } else {
        setError("No se encontró ninguna cuenta con ese correo.");
        setMessage("");
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen px-4">
        <h1 className="text-2xl font-bold mb-4">¿Olvidaste tu contraseña?</h1>
        <form className="w-full max-w-sm space-y-4" onSubmit={handleRecovery}>
            <input
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded"
            required
            />
            <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
            >
            Recuperar contraseña
            </button>
            {message && <p className="text-green-600">{message}</p>}
            {error && <p className="text-red-600">{error}</p>}
            <p className="text-sm mt-4 text-center">
            <a href="/login" className="text-blue-600 hover:underline">Volver al inicio de sesión</a>
            </p>
        </form>
        </div>
    );
};

export default ForgotPassword;
