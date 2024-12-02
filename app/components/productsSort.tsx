"use client"

import React, { useEffect, useState } from "react";

const ProductSorter = ({ products }) => {
  const [sortedProducts, setSortedProducts] = useState([...products]);
  const [sortOrder, setSortOrder] = useState("relevance");

  useEffect(() => {
    const sorted = [...products].sort((a, b) => b.relevance - a.relevance);
    setSortedProducts(sorted);
  }, [products]);

  const handleSortChange = (event: { target: { value: any; }; }) => {
    const order = event.target.value;
    setSortOrder(order);

    const sorted = [...products].sort((a, b) => {
      if (order === "menor") {
        return a.price - b.price;
      } else if (order === "mayor") {
        return b.price - a.price; 
      } else if (order === "relevance") {
        return b.relevance - a.relevance;
      } else if (order === "a-z") { 
        return a.name.localeCompare(b.name);
      } else if (order === "z-a") {
        return b.name.localeCompare(a.name);
      } else { 
        return 0;
      }
    });

    setSortedProducts(sorted);
  };

  return (
    <div>
      <label htmlFor="sortOrder">Ordenado por precio: </label>
      <select id="sortOrder" value={sortOrder} onChange={handleSortChange}>
        <option value="">Por Defecto</option>
        <option value="relevance">Relevancia</option>
        <option value="menor">Precio: Menor a Mayor</option>
        <option value="mayor">Precio: Mayor a Menor</option>
        <option value="a-z">Nombre: A-Z</option>
        <option value="z-a">Nombre: Z-A</option>
      </select>

      <ul>
        {sortedProducts.map((product) => (
        <>
            <li key={product.id}>
                {product.name} - ${product.price}
            </li>
            <li key={product.id}>
                {product.name} - ${product.price} (Relevancia: {product.relevance})
            </li>
        </>
        ))}
      </ul>
    </div>
  );
};

export default ProductSorter;