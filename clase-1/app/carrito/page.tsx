"use client";

import Image from "next/image";
import { productos } from "@/db/products";
import { useState, useEffect } from "react";

type CartObject = {
    [key: string]: number;
};

export default function Carrito() {
    const [cart, setCart] = useState<CartObject>({});

    useEffect(() => {
        const storedCart = window.localStorage.getItem("carrito");
        if (storedCart) {
            setCart(JSON.parse(storedCart));
        }
    }, []);

    function removeItemFromCart(productId: string | { productId: string }) {
        const id =
            typeof productId === "string" ? productId : productId.productId;

        setCart((prev) => {
            const newCart = { ...prev };
            delete newCart[id];
            window.localStorage.setItem("carrito", JSON.stringify(newCart));
            return newCart;
        });
    }

    function increaseItemFromCart(productId: string) {
        setCart((prev) => {
            const newCart = { ...prev };
            newCart[productId] = (newCart[productId] || 0) + 1;
            return newCart;
        });

        window.localStorage.setItem("carrito", JSON.stringify(cart));
    }

    function decreaseItemFromCart(productId: string) {
        setCart((prev) => {
            const newCart = { ...prev };
            newCart[productId] = (newCart[productId] || 0) - 1;
            if (newCart[productId] <= 0) {
                delete newCart[productId];
            }
            return newCart;
        });

        window.localStorage.setItem("carrito", JSON.stringify(cart));
    }

    return (
        <div className="flex flex-col items-center">
            <h1 className="text-4xl my-8">Carrito</h1>
            <ul className="flex flex-col items-center">
                {Object.keys(cart).map((id) => {
                    const product = productos.find((prod) => {
                        return String(prod.id) === id;
                    });

                    return product ? (
                        <li key={id} className="flex flex-row gap-8">
                            <Image
                                src="/placeholder-100x100.png"
                                // src={product.imagen}
                                alt={product?.nombre}
                                width={50}
                                height={50}
                            />
                            <div>
                                <h2 className="text-2xl">{product.nombre}</h2>
                                <p>{product.descripcion}</p>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xl">
                                    ${product.precio}
                                </span>
                                <span className="text-md text-gray-400">
                                    Cantidad: {cart[id]}
                                </span>
                            </div>
                            <div className="flex flex-row gap-2">
                                <button
                                    className="text-White p-2 px-4 rounded-md border-[1px] border-grey-200 text-2xl"
                                    onClick={() =>
                                        decreaseItemFromCart(String(product.id))
                                    }
                                >
                                    -
                                </button>
                                <button
                                    className="bg-red-500 text-white p-2 rounded-md"
                                    onClick={() =>
                                        removeItemFromCart(String(product.id))
                                    }
                                >
                                    Eliminar
                                </button>
                                <button
                                    className="text-White p-2 px-4 rounded-md border-[1px] border-grey-200 text-2xl"
                                    onClick={() =>
                                        increaseItemFromCart(String(product.id))
                                    }
                                >
                                    +
                                </button>
                            </div>
                        </li>
                    ) : null;
                })}
            </ul>
        </div>
    );
}
