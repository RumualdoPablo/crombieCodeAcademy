"use client";

import { useState } from "react";
import React from 'react';
import Image from 'next/image';
import Carousel from '../components/carousel';

function about() {
    const images = [ //direccion de las imagenes que le vamos pasando como prop al componente Carousel
        '/empresa1.jpg', 
        '/empresa2.jpg', 
        '/empresa3.jpg', 
        '/empresa4.jpg', 
        '/empresa5.jpg', 
        '/empresa6.jpg', 
        '/empresa7.jpg', 
      ];

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
  
      const [title, setTitle] = useState("About Us");

    const handleMouseEnter = () => setTitle("About Us!");
    const handleMouseLeave = () => setTitle("About Us");

    return (
    <div>
        {/* Info empresa */}

        <div className="flex flex-col items-center m-4">
    <div className="flex flex-col w-full max-w-3xl mx-auto">
        <h2
          className="text-3xl my-1 font-bold"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {title}
        </h2>
        <p className="my-1">
          Al contrario del pensamiento popular, el texto de Lorem Ipsum no es
          simplemente texto aleatorio. Tiene sus raices en una pieza cl´sica de
          la literatura del Latin, que data del año 45 antes de Cristo, haciendo
          que este adquiera mas de 2000 años de antiguedad. Richard McClintock,
          un profesor de Latin de la Universidad de Hampden-Sydney en Virginia,
          encontró una de las palabras más oscuras de la lengua del latín,
          "consecteur", en un pasaje de Lorem Ipsum, y al seguir leyendo
          distintos textos del latín, descubrió la fuente indudable. Lorem Ipsum
          viene de las secciones 1.10.32 y 1.10.33 de "de Finnibus Bonorum et
          Malorum" (Los Extremos del Bien y El Mal) por Cicero, escrito en el
          año 45 antes de Cristo. Este libro es un tratado de teoría de éticas,
          muy popular durante el Renacimiento. La primera linea del Lorem Ipsum,
          "Lorem ipsum dolor sit amet..", viene de una linea en la sección
          1.10.32
        </p>
        <h3 className="text-2xl m-1 font-bold">From Santa Fe to the Word </h3>
        <p className="my-1">
          Hay muchas variaciones de los pasajes de Lorem Ipsum disponibles, pero
          la mayoría sufrió alteraciones en alguna manera, ya sea porque se le
          agregó humor, o palabras aleatorias que no parecen ni un poco
          creíbles. Si vas a utilizar un pasaje de Lorem Ipsum, necesitás estar
          seguro de que no hay nada avergonzante escondido en el medio del
          texto. Todos los generadores de Lorem Ipsum que se encuentran en
          Internet tienden a repetir trozos predefinidos cuando sea necesario,
          haciendo a este el único generador verdadero (válido) en la Internet.
          Usa un diccionario de mas de 200 palabras provenientes del latín,
          combinadas con estructuras muy útiles de sentencias, para generar
          texto de Lorem Ipsum que parezca razonable. Este Lorem Ipsum generado
          siempre estará libre de repeticiones, humor agregado o palabras no
          características del lenguaje, etc.
        </p>
        </div>
      </div>
        
        {/* FORM */}
        
        <div className="flex items-center justify-center min-h-screen ">
            <div className="bg-black border-4 border-slate-400 1px  shadow-lg rounded-lg p-8 max-w-sm w-full">
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
    
    {/* IMAGENES DE LA EMPRESA */}
    <div className="flex justify-center space-x-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            
            <h2 className="text-3xl font-bold text-center mb-8">Nuestra empresa</h2>
            
            <div className="flex justify-center items-center bg-gray-100">
                <div className="w-full max-w-2xl"> 
                    <Carousel images={images} />
                </div>
                
            </div>    
        </div>
    </div>
        
        {/* EQUIPO */}
        
        <div>
            <h2 className='text-3xl font-bold mb-6 text-center p-6'>Members</h2>
            <h3 className=' mb-4 text-center'>The best members 😎</h3>
            <div className='flex justify-center items-center space-x-4'>
                <div className="relative w-[200px] h-[200px]">
                    <Image src="/blue.jpg" alt="Miembro Gero Grimaldi" fill className="rounded object-cover" />
                    <h2 className="absolute inset-0 flex justify-center items-center text-white font-bold bg-black/50 rounded">
                        Gero Grimaldi
                    </h2>
                </div>
                <div className="relative w-[200px] h-[200px]">
                    <Image src="/bluelight.jpg" alt="Miembro Nacho Debuck" fill className="rounded object-cover" />
                    <h2 className="absolute inset-0 flex justify-center items-center text-white font-bold bg-black/50 rounded">
                        Nacho Debuck
                    </h2>
                </div>
                <div className="relative w-[200px] h-[200px]">
                    <Image src="/red.jpg" alt="Miembro Jose Antille" fill className="rounded object-cover" />
                    <h2 className="absolute inset-0 flex justify-center items-center text-white font-bold bg-black/50 rounded">
                        Jose Antille
                    </h2>
                </div>
                <div className="relative w-[200px] h-[200px]">
                    <Image src="/yellow.png" alt="Miembro Ema Forlin" fill className="rounded object-cover" />
                    <h2 className="absolute inset-0 flex justify-center items-center text-white font-bold bg-black/50 rounded">
                        Ema Forlin
                    </h2>
                </div>
            </div>
        </div>
        
        
</div>
    );
}

export default about;

