"use client";

import { useState } from "react";

type Post = {
  id: number;
  title: string;
  description: string;
  date: string;
  readTime: string;
}

const posts: Post[] = [
  {
    id: 1,
    title: "Tendencias eCommerce 2024",
    description: 
      "Descubre las tecnologías y estrategias que están revolucionando el comercio electrónico: IA en recomendaciones, realidad aumentada para pruebas virtuales y más.",
    date: "15 Nov 2024",
    readTime: "5 min lectura"
  },
  {
    id: 2,
    title: "Guía de Marketing Digital",
    description:
      "Aprende a crear una estrategia efectiva de marketing digital: SEO, email marketing, redes sociales y publicidad pagada. Casos de éxito y mejores prácticas.",
    date: "21 Nov 2024",
    readTime: "8 min lectura"
  },
  {
    id: 3,
    title: "Optimización de Conversión",
    description:
      "Técnicas probadas para mejorar la tasa de conversión de tu tienda online: diseño UX, copywriting persuasivo, y optimización del proceso de checkout.",
    date: "22 Nov 2024",
    readTime: "6 min lectura"
  },
];

const Newsletter = () => {
  const [email , setEmail] = useState("");
  const handleSubscribe = () => {
    alert("Despedite de cuenta, maquinola 😎");
  };
  const OnEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  }
  return (
    <div className="relative flex items-center isolate overflow-hidden bg-gray-900 py-16 sm:py-24 lg:py-32 h-screen">
      <div className="w-full px-6 lg:px-8 flex items-center justify-center">
        <div className="">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-4xl font-semibold tracking-tight text-white">
              ¡No te pierdas ninguna oferta!
            </h2>
            <p className="mt-4 text-lg text-gray-300">
              Suscríbete y recibe las mejores ofertas, descuentos exclusivos y novedades antes que nadie. ¡15% OFF en tu primera compra!
            </p>
            <div className="mt-6 flex max-w-md gap-x-4">
              <input
                type="email"
                required
                value={email}
                onChange={OnEmailChange}
                placeholder="Ingresa tu Email"
                className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm/6"
              />
              <button
                type="button"
                onClick={handleSubscribe}
                className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Suscribirse
              </button>
            </div>
          </div>

          <div className="flex flex-col space-y-6">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Últimas entradas
            </h3>
            {posts.map((post) => (
              <div
                key={post.id}
                className="bg-white/5 rounded-lg p-6 hover:bg-white/10 transition-colors cursor-pointer"
              >
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-lg font-medium text-white">{post.title}</h4>
                  <span className="text-sm text-gray-400">{post.readTime}</span>
                </div>
                <p className="text-gray-300 text-sm mb-2">{post.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">Publicado: {post.date}</span>
                  <button className="text-indigo-400 hover:text-indigo-300 text-sm font-medium">
                    Leer más →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
        />
      </div>
    </div>
  );
};
 
export default Newsletter