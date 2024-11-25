"use client";

import { useState } from "react";


const About = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");


    async function handleSubmmitContact() {
        if (name.length < 1) {
            alert("Nombre invalido");
        }
        if (email.length < 3) {
            alert("email invalido");
        }
        alert("Mensaje enviado");
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-900">
        <div className="bg-black shadow-lg rounded-lg p-8 max-w-sm w-full">
            <h1 className="text-2xl font-bold text-center mb-6">Contacto</h1>
            <div className="space-y-4">
                <input
                    type="text"
                    placeholder="Nombre"
                    onChange={ (e) => setName(e.target.value)}
                    className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-950 text-black"
                />
                <input
                    type="email"
                    placeholder="Email"
                    onChange={ (e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-950 text-black"
                />
                <textarea 
                    placeholder="Escribe tu mensaje..."
                    className="px-4 py-2 w-full min-h-24 max-h-48 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-950 text-black"></textarea>
                <button
                    onClick={handleSubmmitContact}
                    className="w-full bg-green-600 text-white py-2 rounded-lg font-semibold shadow-md hover:bg-green-700 transition duration-300">
                    Enviar
                </button>
            </div>
        </div>
    </div>
  )  
} 

export default About;