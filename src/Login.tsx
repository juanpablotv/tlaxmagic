import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        
             // Obtener usuario guardado
            const storedUser = localStorage.getItem("user");
            console.log("Usuario guardado:", storedUser); // <-- Depuración

            if (!storedUser) {
                setError("No se encontró ninguna cuenta registrada.");
                return;
            }

            const parsedUser = JSON.parse(storedUser);

            // Limpiar espacios
            if (
                email.trim() === parsedUser.email.trim() &&
                password.trim() === parsedUser.password.trim()
            ) {
                // Guardar sesión activa
                localStorage.setItem("session", JSON.stringify({ email }));
                navigate("/"); // Redirige al home
            } else {
                setError("Correo o contraseña incorrectos.");
            }

        };

    return (
        <div className="flex flex-col items-center justify-center h-screen px-4">
        <h1 className="text-3xl font-bold mb-6">Iniciar Sesión</h1>
        <form className="w-full max-w-sm space-y-4" onSubmit={handleLogin}>
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
            {error && <p className="text-red-500">{error}</p>}
            <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
            >
            Entrar
            </button>
            <p className="text-sm mt-4 text-center">
            ¿No tienes cuenta?{" "}
            <a href="/register" className="text-blue-600 hover:underline">
                Regístrate aquí
            </a>
            </p>
        </form>
        </div>
    );
};

export default Login;
