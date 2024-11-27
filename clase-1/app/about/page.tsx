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
                 
               
                    {/* <div className="relative w-full max-w-2xl mx-auto h-72"> 
                        <div className="overflow h-full relative"> 
                                    
                            <img
                                src="/empresa1.jpg"
                                alt="Nuestra empresa"
                                className="h-auto max-w-md rounded-lg mb-4"
                            /> 
                            <img
                                src="/empresa2.jpg"
                                alt="Nuestra empresa"
                                className="h-auto max-w-md rounded-lg mb-4"
                            /> 
                            <img
                                src="/empresa3.jpg"
                                alt="Nuestra empresa"
                                className="h-auto max-w-md rounded-lg mb-4"
                                /> 
                
                            <img
                                src="/empresa4.jpg"
                                alt="Nuestra empresa"
                                className="h-auto max-w-md rounded-lg mb-4"
                                />                                      
                        </div>
                    </div> */}

                </div>    
                    
            </div>
        </div>
    </div>
    );
}

export default about;
