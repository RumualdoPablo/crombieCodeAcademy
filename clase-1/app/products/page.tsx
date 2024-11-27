import Image from "next/image";
import Link from "next/link";

type ProductTypes = {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: { rate: number; count: number };
};

export default async function Product() {
    const data = await fetch(`https://fakestoreapi.com/products`);
    const products: ProductTypes[] = await data.json();

    return (
        <main className="grid grid-cols-4 p-32 gap-8">
            {products.map((product) => (
                <Link href={`/producto/${product.id}`} key={product.id}>
                    <div
                        className="border-[1px] border-gray-400 flex flex-col items-center p-6 rounded-md h-full gap-4"
                        key={product.id}
                    >
                        <Image
                            src={product.image}
                            width={250}
                            height={250}
                            objectFit="fill"
                            alt={`image of ${product.title}`}
                        />
                        <h2 className="text-2xl">{product.title}</h2>
                        <span>
                            {new Intl.NumberFormat("en-US", {
                                style: "currency",
                                currency: "ARS",
                            }).format(product.price)}
                        </span>
                    </div>
                </Link>
            ))}
        </main>
    );
}
