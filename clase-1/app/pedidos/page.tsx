"use client"
import React from 'react'
import { useState } from 'react';
import pedidos from '../../db/pedidos.ts';
import { stat } from 'fs';

const page = () => {

const [numPedido, setNumPedido] = useState("");
const [pedidoEstado, setPedidoEstado] = useState<string | null>(null); // Estado para mostrar el estado del pedido
const btn = document.getElementById('button')

const checkPedidoStatus = () => {
    const pedido = pedidos.find(pedido => pedido.numeroPedido === Number(numPedido)) || null;

    let status = "Pedido no encontrado";

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
                    placeholder="Numero de pedido"
                    onChange={ (e) => setNumPedido(e.target.value)}
                    className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-950 text-black"
                    />
                    <button
                    id="button"
                    onClick={checkPedidoStatus}
                    className="w-full bg-green-600 text-white py-2 rounded-lg font-semibold shadow-md hover:bg-green-700 transition duration-300">
                    Consultar
                    </button>
                    {/* Mostrar el estado del pedido debajo del botón */}
                    {pedidoEstado && (
                    <h2 className="text-center mt-4 text-lg font-semibold">
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