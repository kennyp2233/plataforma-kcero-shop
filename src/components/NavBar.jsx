import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import KCERO from '../img/k0-coca-cola-con-letras.webp';
import { AuthContext } from '../contexts/AuthContext'; // Asegúrate de crear este contexto

const Navbar = () => {
    const { isAuthenticated, user, logout } = useContext(AuthContext); // Uso del contexto de autenticación
    const location = useLocation(); // Obtener la ubicación actual

    // Función para determinar si el enlace es el activo
    const isActive = (path) => location.pathname === path;

    // Maneja la navegación al hacer clic en el logo para una página externa
    const handleLogoClick = () => {
        window.location.href = 'https://www.kcero.shop'; // Reemplaza con la URL externa deseada
    };

    return (
        <nav className="bg-black p-4 shadow-lg flex items-center justify-between">
            {/* Sección del logo y nombre de la empresa */}
            <button className="flex items-center space-x-4 cursor-pointer" onClick={handleLogoClick}>
                <img
                    src={KCERO} // Reemplaza con la ruta a tu logo
                    alt="Logo de KCERO" // Añade un texto alternativo para accesibilidad
                    className="h-10 w-auto" // Ajusta el tamaño del logo según sea necesario
                />
                <span className="text-white text-2xl font-bold">KCERO</span>
            </button>

            {/* Menú de navegación */}
            <ul className="flex space-x-6 text-white font-medium">
                <li>
                    <Link
                        to="/"
                        className={`transition-colors ${isActive('/') ? 'text-red-400' : 'hover:text-red-400'}`}
                    >
                        Inicio
                    </Link>
                </li>
                {user?.isAdmin && (
                    <li>
                        <Link
                            to="/admin"
                            className={`transition-colors ${isActive('/admin') ? 'text-red-400' : 'hover:text-red-400'}`}
                        >
                            Panel de Administración
                        </Link>
                    </li>
                )}
                {!user?.isAdmin && (
                    <>
                        <li>
                            <Link
                                to="/orders"
                                className={`transition-colors ${isActive('/orders') ? 'text-red-400' : 'hover:text-red-400'}`}
                            >
                                Estado del Pedido
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/search-history"
                                className={`transition-colors ${isActive('/order-history') ? 'text-red-400' : 'hover:text-red-400'}`}
                            >
                                Historial de Pedidos
                            </Link>
                        </li>
                    </>
                )}
            </ul>

            {/* Sección de autenticación */}
            <div className="flex items-center space-x-4">
                {isAuthenticated ? (
                    <>
                        <span className="text-white font-medium">{user?.name}</span>
                        <button
                            onClick={logout}
                            className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition-colors"
                        >
                            Cerrar sesión
                        </button>
                    </>
                ) : (
                    <Link
                        to="/login"
                        className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition-colors"
                    >
                        Iniciar sesión
                    </Link>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
