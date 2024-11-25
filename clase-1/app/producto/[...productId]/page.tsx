import Image from "next/image";

type ProductTypes = {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: { rate: number; count: number };
};

export default async function Product({
    params,
}: {
    params: Promise<{ productId: string }>;
}) {
    const productId = (await params).productId;

    const data = await fetch(`https://fakestoreapi.com/products/${productId}`);
    const product: ProductTypes = await data.json();

    return (
        <main className="flex flex-row gap-12 p-32">
            <Image
                src={product.image}
                width={250}
                height={250}
                alt={`image of ${product.title}`}
            />
            <div className="flex flex-col gap-4">
                <h1 className="text-5xl">{product.title}</h1>
                <p>{product.description}</p>
                <span className="text-2xl">
                    {new Intl.NumberFormat("en-US", {
                        style: "currency",
                        currency: "ARS",
                    }).format(product.price)}
                </span>
                <button className="dark:bg-white bg-black p-4 text-white dark:text-black rounded-md hover:opacity-80 hover:cursor-pointer justify-self-end mx-0">
                    Comprar ahora
                </button>
            </div>
        </main>
    );
}
