import Image from "next/image";
import Link from "next/link";
import { productos } from "@/db/products"; // Ruta de importación ajustada según tu estructura

type ProductTypes = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: { rate: number; count: number };
};

export default function Product() {
  return (
    <main className="grid grid-cols-4 p-32 gap-8">
      {productos.map((product) => (
        <Link href={`/producto/${product.id}`} key={product.id}>
          <div
            className="border-[1px] border-gray-400 flex flex-col items-center p-6 rounded-md h-full gap-4"
          >
            <Image
              src={product.imagen}
              width={250}
              height={250}
              objectFit="fill"
              alt={`image of ${product.nombre}`}
            />
            <h2 className="text-2xl">{product.nombre}</h2>
            <span>
              {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "ARS",
              }).format(product.precio)}
            </span>
          </div>
        </Link>
      ))}
    </main>
  );
}
