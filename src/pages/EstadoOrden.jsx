import React, { useState } from 'react';
import axios from 'axios';

const EstadoOrden = () => {
    const [orderCode, setOrderCode] = useState('');
    const [orderStatus, setOrderStatus] = useState(null);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Reemplaza esta URL con la URL de tu API de WooCommerce
            const response = await axios.get(`/api/orders/${orderCode}`);
            setOrderStatus(response.data);
            setError('');
        } catch (error) {
            setError('No se encontró el pedido. Verifica el código e inténtalo de nuevo.');
            setOrderStatus(null);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h1 className="text-3xl font-bold text-center text-black mb-6">Consulta el Estado de tu Pedido</h1>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="orderCode" className="block text-gray-700 font-medium mb-2">Código de Pedido</label>
                        <input
                            type="text"
                            id="orderCode"
                            value={orderCode}
                            onChange={(e) => setOrderCode(e.target.value)}
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-colors"
                    >
                        Consultar Estado
                    </button>
                </form>

                {error && (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-4" role="alert">
                        <span className="block sm:inline">{error}</span>
                    </div>
                )}

                {orderStatus && (
                    <div className="mt-6">
                        <h2 className="text-2xl font-semibold text-black mb-2">Estado del Pedido</h2>
                        <p className="text-gray-700">Código de Pedido: {orderStatus.code}</p>
                        <p className="text-gray-700">Estado: {orderStatus.status}</p>
                        <p className="text-gray-700">Fecha: {orderStatus.date}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default EstadoOrden;
