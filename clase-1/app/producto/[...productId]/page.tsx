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
        <main className="flex flex-col md:flex-row gap-12 p-8 md:p-32 items-center md:items-start justify-center">
            <Image
                src={product.image}
                width={250}
                height={250}
                alt={`image of ${product.title}`}
            />
            <div className="flex flex-col gap-4 items-center md:items-start">
                <h1 className="text-3xl md:text-5xl text-center md:text-left">
                    {product.title}
                </h1>
                <p className="text-center md:text-left">
                    {product.description}
                </p>
                <span className="text-2xl">
                    {new Intl.NumberFormat("en-US", {
                        style: "currency",
                        currency: "ARS",
                    }).format(product.price)}
                </span>

                <div className="w-full md:w-64 mt-auto">
                    <button className="dark:bg-white bg-black p-4 text-white dark:text-black rounded-md hover:opacity-80 hover:cursor-pointer w-full">
                        Comprar ahora
                    </button>
                </div>
            </div>
        </main>
    );
}
