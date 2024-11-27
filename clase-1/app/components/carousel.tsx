"use client" //porque usamos hooks, con interaccion del cliente
import { useState } from 'react';

interface CarouselProps {
  images: string[]; // array de direcciones de las imágenes de la empresa
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0); //funcion para ir controlando indice del carousel

  const nextSlide = () => {
    setCurrentIndex(
        (prevIndex) => (prevIndex + 1) % images.length
    ); //avanzar el carousel
  };   // el % images.lenght hace que sea circular. Al llegar a la ultima imagen, el indice vuelve a 0

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length //retroceder
    );
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto h-72"> {/* Contenedor principal con altura fija para que entren bien todas */}
      <div className="overflow-hidden h-full relative"> {/* Contenedor con overflow hidden, oculta las siguietes imagenes del carousel */}
        <div
          className="flex transition-transform duration-300 h-full"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`, //transicion. Multiplica el indice actual del state por 100, haciendo que se mueva en su totalidad al costado
          }}
        >
             {/* mapeamos las imagenes */}
          {images.map((image, index) => (
            <div key={index} className="w-full flex-shrink-0 h-full">
              <img
                src={image}
                alt={image}
                className="w-full h-full object-cover rounded-lg shadow-lg text-black"
              />
            </div>
          ))}
        </div>
      </div>

      <button
        className="absolute top-1/2 left-2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full"
        onClick={prevSlide}
      >
        &#10094;
      </button>
      <button
        className="absolute top-1/2 right-2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full"
        onClick={nextSlide}
      >
        &#10095;
      </button>
    </div>
  );
};

export default Carousel;
