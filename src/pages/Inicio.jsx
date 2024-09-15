import React from 'react';
import { Link } from 'react-router-dom';
import { FaBoxOpen, FaHistory } from 'react-icons/fa'; // Iconos para mayor atractivo

const Inicio = () => {
    return (
        <div className="p-6 bg-gray-100 min-h-screen flex flex-col items-center">
            <h1 className="text-4xl font-extrabold mb-8 text-gray-900">Panel de Control de KCERO</h1>

            <p className="text-lg text-gray-700 mb-12 text-center">
                Administra tus pedidos de manera eficiente y consulta el estado actual de tus compras.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
                {/* Sección Estado de los Pedidos */}
                <section className="bg-white p-6 shadow-lg rounded-lg flex items-center space-x-4">
                    <FaBoxOpen className="text-red-600 text-4xl" />
                    <div className="flex-1">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Estado de tus Pedidos</h2>
                        <p className="text-gray-600 mb-4">Consulta el estado actual de tus pedidos y mantente al tanto de su progreso en tiempo real.</p>
                        <Link
                            to="/orders"
                            className="bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-colors"
                        >
                            Ver Estado de Pedidos
                        </Link>
                    </div>
                </section>

                {/* Sección Historial de Pedidos */}
                <section className="bg-white p-6 shadow-lg rounded-lg flex items-center space-x-4">
                    <FaHistory className="text-gray-800 text-4xl" />
                    <div className="flex-1">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Historial de Pedidos</h2>
                        <p className="text-gray-600 mb-4">Accede a un historial detallado de todos tus pedidos anteriores y revisa tus compras pasadas.</p>
                        <Link
                            to="/order-history"
                            className="bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-900 transition-colors"
                        >
                            Ver Historial de Pedidos
                        </Link>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Inicio;
