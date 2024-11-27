"use client"
import React from 'react'
import { useState } from 'react';
import pedidos from '../../db/pedidos.ts';

const page = () => {

const [numPedido, setNumPedido] = useState("");
const [pedidoEstado, setPedidoEstado] = useState<string | null>(null); // Estado para mostrar el estado del pedido

const checkPedidoStatus = () => {
    const pedido = pedidos.find(pedido => pedido.numeroPedido === Number(numPedido)) || null;

    if (pedido) {
        setPedidoEstado(pedido.estado);
      } else {
        setPedidoEstado("Pedido no encontrado");
      }

    console.log("Pedido: " + pedido?.numeroPedido)
    console.log(numPedido)
}

  return (
    <div>
      <div className="flex items-center justify-center min-h-screen ">
            <div className="bg-black border-4 border-slate-400 1px  shadow-lg rounded-lg p-8 max-w-sm w-full">
                <h1 className="text-2xl font-bold text-center mb-6">Averiguar estado de tu pedido</h1>
                <div className="space-y-4">
                    <input
                        type="text"
                        placeholder="Numero de pedido (100X)"
                        onChange={ (e) => setNumPedido(e.target.value)}
                        className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-950 text-black"
                    />
                    <button
                        id="button"
                        onClick={checkPedidoStatus}
                        className="w-full bg-green-600 text-white py-2 rounded-lg font-semibold shadow-md hover:bg-green-700 transition duration-300"
                    >
                    Consultar
                    </button>
                    {pedidoEstado && (
                    <h2 
                    className={` ${pedidoEstado === "entregado" ? 'bg-green-500' : //color condicional segun estado pedido
                        pedidoEstado === "cancelado" ? 'bg-red-500' : 'bg-gray-500'}
                    text-center mt-4 text-lg font-semibold`}>
                        Estado: {pedidoEstado}
                    </h2>
                    )}
            </div>
        </div>
        </div>
    </div>
  )
}

export default page