import { productos } from "@/db/products";
import Image from "next/image";
import { AddToCartButton } from "./addToCart";

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

    const product = productos.find(
        (product) => product.id.toString() === productId
    );

    return product ? (
        <main className="flex flex-col md:flex-row gap-12 p-8 md:p-32 items-center md:items-start justify-center">
            <Image
                src="/placeholder-100x100.png"
                // src={product.imagen}
                width={250}
                height={250}
                alt={`image of ${product.nombre}`}
            />
            <div className="flex flex-col gap-4 items-center md:items-start">
                <h1 className="text-3xl md:text-5xl text-center md:text-left">
                    {product.nombre}
                </h1>
                <p className="text-center md:text-left">
                    {product?.descripcion}
                </p>
                <span className="text-2xl">
                    {new Intl.NumberFormat("en-US", {
                        style: "currency",
                        currency: "ARS",
                    }).format(product?.precio)}
                </span>
                <div className="w-full md:w-64 mt-auto">
                    <AddToCartButton productId={productId} />
                </div>
            </div>
        </main>
    ) : null;
}
