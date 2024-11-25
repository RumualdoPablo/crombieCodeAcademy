"use client";

import { useState } from "react";

export default function AboutUs() {
  const [title, setTitle] = useState("About Us");

  const handleMouseEnter = () => setTitle("About Us!");
  const handleMouseLeave = () => setTitle("About Us");

  return (
    <>
      <div className="flex flex-col items-center m-4">
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
    </>
  );
}
