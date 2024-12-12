"use client";

import { useState, useEffect } from "react";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
  categoryId: number;
}

interface NewProduct {
  name: string;
  description: string;
  price: string; // Mantener como string porque viene del formulario
  stock: string;
  categoryId: string;
}

export default function Dashboard() {
  const [products, setProducts] = useState<Product[]>([]); // Estado tipado para la lista de productos
  const [newProduct, setNewProduct] = useState<NewProduct>({
    name: "",
    description: "",
    price: "",
    stock: "",
    categoryId: "",
  });

  const [editingProduct, setEditingProduct] = useState<Product | null>(null); // Producto en edición

  // Obtener productos al cargar el componente
  useEffect(() => {
    async function fetchProducts() {
      const res = await fetch("/api/product");
      if (res.ok) {
        const data: Product[] = await res.json();
        setProducts(data);
      } else {
        console.error("Error al cargar los productos");
      }
    }
    fetchProducts();
  }, []);

  // Manejar envío del formulario para crear o editar un producto
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const method = editingProduct ? "PUT" : "POST";
    const url = editingProduct ? `/api/product/${editingProduct.id}` : "/api/product";

    const res = await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...newProduct,
        price: parseFloat(newProduct.price), // Convertir a número antes de enviar
        stock: parseInt(newProduct.stock, 10),
        categoryId: parseInt(newProduct.categoryId, 10),
      }),
    });

    if (res.ok) {
      const updatedProduct: Product = await res.json();

      if (editingProduct) {
        // Actualizar el producto en la lista
        setProducts((prev) =>
          prev.map((p) => (p.id === updatedProduct.id ? updatedProduct : p))
        );
        setEditingProduct(null); // Salir del modo de edición
      } else {
        setProducts((prev) => [...prev, updatedProduct]); // Agregar nuevo producto a la lista
      }

      setNewProduct({ name: "", description: "", price: "", stock: "", categoryId: "" });
    } else {
      alert("Error al agregar o actualizar el producto");
    }
  };

  // Manejar eliminación de un producto
  const handleDelete = async (id: number) => {
    const res = await fetch(`/api/product/${id}`, { method: "DELETE" });

    if (res.ok) {
      setProducts((prev) => prev.filter((product) => product.id !== id)); // Eliminar producto de la lista
    } else {
      alert("Error al eliminar el producto");
    }
  };

  // Manejar inicio del modo de edición
  const handleEdit = (product: Product) => {
    setEditingProduct(product);
    setNewProduct({
      name: product.name,
      description: product.description,
      price: product.price.toString(),
      stock: product.stock.toString(),
      categoryId: product.categoryId.toString(),
    });
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Panel de Control</h1>

      {/* Formulario para agregar/editar producto */}
      <form onSubmit={handleSubmit} className="mb-8 space-y-4 text-black">
        <input
          type="text"
          placeholder="Nombre"
          value={newProduct.name}
          onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
          className="border p-2 w-full"
          required
        />
        <textarea
          placeholder="Descripción"
          value={newProduct.description}
          onChange={(e) =>
            setNewProduct({ ...newProduct, description: e.target.value })
          }
          className="border p-2 w-full"
          required
        ></textarea>
        <input
          type="number"
          placeholder="Precio"
          value={newProduct.price}
          onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
          className="border p-2 w-full"
          required
        />
        <input
          type="number"
          placeholder="Stock"
          value={newProduct.stock}
          onChange={(e) => setNewProduct({ ...newProduct, stock: e.target.value })}
          className="border p-2 w-full"
          required
        />
        <input
          type="number"
          placeholder="ID Categoría"
          value={newProduct.categoryId}
          onChange={(e) =>
            setNewProduct({ ...newProduct, categoryId: e.target.value })
          }
          className="border p-2 w-full"
          required
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          {editingProduct ? "Actualizar Producto" : "Agregar Producto"}
        </button>
        {editingProduct && (
          <button
            type="button"
            className="bg-gray-500 text-white px-4 py-2 rounded ml-2"
            onClick={() => {
              setEditingProduct(null);
              setNewProduct({ name: "", description: "", price: "", stock: "", categoryId: "" });
            }}
          >
            Cancelar
          </button>
        )}
      </form>

      {/* Tabla de productos */}
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border p-2">ID</th>
            <th className="border p-2">Nombre</th>
            <th className="border p-2">Descripción</th>
            <th className="border p-2">Precio</th>
            <th className="border p-2">Stock</th>
            <th className="border p-2">Categoría</th>
            <th className="border p-2">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td className="border p-2">{product.id}</td>
              <td className="border p-2">{product.name}</td>
              <td className="border p-2">{product.description}</td>
              <td className="border p-2">${product.price}</td>
              <td className="border p-2">{product.stock}</td>
              <td className="border p-2">{product.categoryId}</td>
              <td className="border p-2">
                <button
                  onClick={() => handleEdit(product)}
                  className="bg-yellow-500 text-white px-2 py-1 rounded mr-2"
                >
                  Editar
                </button>
                <button
                  onClick={() => handleDelete(product.id)}
                  className="bg-red-500 text-white px-2 py-1 rounded"
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
