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
      ];

    return (
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
            
            {/* IMAGENES DE LA EMPRESA */}
            <div className="flex justify-center space-x-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    
                    <h2 className="text-3xl font-bold text-center mb-8">Nuestra empresa</h2>

                    <div className="flex justify-center items-center bg-gray-100">
                        <div className="w-full max-w-2xl"> 
                            <Carousel images={images} />
                        </div>
                    </div>

                {/* <img
                    src="https://media.istockphoto.com/id/499785795/photo/analyzing-electronic-document.jpg?s=612x612&w=0&k=20&c=PYrD8albkJQHy_sgjIFCEScjfe-4DTylouvEL-oHfOU="
                    alt="Nuestra empresa"
                    className="h-auto max-w-md rounded-lg mb-4"
                />
                <img
                    src="https://media.istockphoto.com/id/1349030917/es/foto/negocios-y-finanzas-mirando-hacia-los-edificios-de-oficinas-de-gran-altura-en-el-distrito.jpg?s=612x612&w=0&k=20&c=_L5sYNxsZaMlEpbT00mwuAfWKps5MqLoCBTLMukFgF0="
                    alt="Nuestra empresa"
                    className="h-auto max-w-md rounded-lg mb-4"
                />
                <img
                    src="https://media.istockphoto.com/id/1365436662/es/foto/asociaci%C3%B3n-de-%C3%A9xito.jpg?s=612x612&w=0&k=20&c=FncLRnhPerwS05mDOuA5jFVDDqBapb4Y0DZjzUMD_gk="
                    alt="Nuestra empresa"
                    className="h-auto max-w-md rounded-lg mb-4"
                /> */}
                </div>
            </div>
        </div>
    );
}

export default about;
