//app\producto\[...productId]\page.tsx

import Image from "next/image";
import { productos } from "@/db/products"; // Ajusta la ruta si es necesario
import { notFound } from "next/navigation";

type ProductTypes = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: { rate: number; count: number };
  stock: boolean;
};

export default function Product({ params }: { params: { productId: string } }) {
  // Convertimos el ID a número para la búsqueda
  const productId = parseInt(params.productId, 10);

  // Buscamos el producto en la base de datos local
  const product = productos.find((p) => p.id === productId);

  // Si no se encuentra el producto, mostramos un error 404
  if (!product) {
    notFound();
  }

  return (
    <main className="flex flex-col md:flex-row gap-12 p-8 md:p-32 items-center md:items-start justify-center">
      <Image
        src={product.imagen}
        width={250}
        height={250}
        alt={`image of ${product.nombre}`}
      />
      <div className="flex flex-col gap-4 items-center md:items-start">
        <h1 className="text-3xl md:text-5xl text-center md:text-left">
          {product.nombre}
        </h1>
        <p className="text-center md:text-left">{product.descripcion}</p>
        <span className="text-2xl">
          {new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "ARS",
          }).format(product.precio)}
        </span>

        <div className="w-full md:w-64 mt-auto">
          <button
            className="dark:bg-white bg-black p-4 text-white dark:text-black rounded-md hover:opacity-80 w-full"
            disabled={!product.enStock}
            style={{
              opacity: product.enStock ? 1 : 0.5,
              cursor: product.enStock ? "pointer" : "not-allowed",
            }}
          >
            {product.enStock ? "Comprar ahora" : "Sin stock"}
          </button>

          {!product.enStock && (
            <div className="text-red-500 mt-2">No hay stock disponible</div>
          )}
        </div>
      </div>
    </main>
  );
}
