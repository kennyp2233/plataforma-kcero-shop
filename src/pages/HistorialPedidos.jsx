import React from 'react';
import { useLocation } from 'react-router-dom';

const HistorialPedidos = () => {
    const location = useLocation();
    const { history } = location.state || { history: [] };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h1 className="text-3xl font-bold text-center text-black mb-6">Historial de Pedidos</h1>

                {history.length === 0 ? (
                    <p className="text-gray-700">No se encontraron pedidos en tu historial.</p>
                ) : (
                    <ul className="space-y-4">
                        {history.map((order) => (
                            <li key={order.code} className="bg-gray-50 p-4 rounded-lg shadow-sm">
                                <p className="text-gray-700">Código de Pedido: {order.code}</p>
                                <p className="text-gray-700">Estado: {order.status}</p>
                                <p className="text-gray-700">Fecha: {order.date}</p>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default HistorialPedidos;
