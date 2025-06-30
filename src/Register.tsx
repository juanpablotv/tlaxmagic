import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register: React.FC = () => {
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleRegister = (e: React.FormEvent) => {
        e.preventDefault();

        // Validaciones
        if (!nombre || !email || !password || !confirmPassword) {
        setError("Todos los campos son obligatorios.");
        return;
        }

        if (password.length < 6) {
        setError("La contraseña debe tener al menos 6 caracteres.");
        return;
        }

        if (password !== confirmPassword) {
        setError("Las contraseñas no coinciden.");
        return;
        }

        // Simular guardado en localStorage
        const nuevoUsuario = { nombre, email, password };
        localStorage.setItem("user", JSON.stringify(nuevoUsuario));

        // Redirigir al home
        navigate("/src/HomePage.tsx");
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen px-4">
        <h1 className="text-3xl font-bold mb-6">Crear Cuenta</h1>
        <form className="w-full max-w-sm space-y-4" onSubmit={handleRegister}>
            <input
            type="text"
            placeholder="Nombre completo"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            className="w-full px-4 py-2 border rounded"
            required
            />
            <input
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded"
            required
            />
            <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border rounded"
            required
            />
            <input
            type="password"
            placeholder="Confirmar contraseña"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full px-4 py-2 border rounded"
            required
            />
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
            >
            Registrarse
            </button>
        </form>
        </div>
    );
};

export default Register;
