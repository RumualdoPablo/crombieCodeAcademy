"use client";

import { revalidatePath } from "next/cache";

export function addToCart(productId: string | { productId: string }) {
    const id = typeof productId === "string" ? productId : productId.productId;

    if (typeof window !== "undefined") {
        const carrito = JSON.parse(
            window.localStorage.getItem("carrito") || "{}"
        );
        const cart = { ...carrito };
        cart[id] = cart[id] ? cart[id] + 1 : 1;
        window.localStorage.setItem("carrito", JSON.stringify(cart));
    }
}

export function AddToCartButton(productId: string | { productId: string }) {
    return (
        <button
            className="dark:bg-white bg-black p-4 text-white dark:text-black rounded-md hover:opacity-80 hover:cursor-pointer w-full"
            onClick={() => addToCart(productId)}
        >
            Comprar ahora
        </button>
    );
}
