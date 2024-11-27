import Image from "next/image";
import Link from "next/link";
type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: { rate: number; count: number };
};
export default async function Home() {
  const product1 = await fetch(`https://fakestoreapi.com/products/1`);
  const product2 = await fetch(`https://fakestoreapi.com/products/2`);
  const product3 = await fetch(`https://fakestoreapi.com/products/3`);
  const product4 = await fetch(`https://fakestoreapi.com/products/4`);
  const productos: Product[] = await Promise.all([
    product1.json(),
    product2.json(),
    product3.json(),
    product4.json(),
  ]);
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-xl">Hero Store</h1>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="flex justify-center items-center w-full m-4">
          <Image
            className="dark:invert"
            src="hero-store.svg"
            alt="hero img"
            width={800}
            height={810}
            priority
          />
        </div>
        <div className="flex justify-center items-center w-full m-4">
          <button className="p-4 bg-red-200 border-solid border-4 rounded-full">
            <Link href="/products">
              <p className="text-xl text-black-800">Ver Productos</p>
            </Link>
          </button>
        </div>
        <div className="flex justify-center items-center w-full m-4 border-solid border-4">
          {productos.map((product: Product) => (
            <Link href="/products">
              <div
                key={product.id}
                className="flex flex-col gap-4 items-center p-2"
              >
                <Image
                  src={product.image}
                  width={150}
                  height={150}
                  alt={`image of ${product.title}`}
                />
                <h1 className="text-sm text-center">{product.title}</h1>
              </div>
            </Link>
          ))}
        </div>
      </main>
      <footer className="flex gap-6 flex-wrap items-center justify-center border-t-2 border-solid">
        <p>Derechos reservados</p>
      </footer>
    </div>
  );
}
