interface Pedido {
    numeroPedido: number;
    idUsuario: number;
    estado: "entregado" | "en viaje" | "cancelado";
    productos: {
      idProducto: number;
      cantidad: number;
    }[];
  }
  
  const pedidos: Pedido[] = [
    {
      numeroPedido: 1001,
      idUsuario: 1,
      estado: "entregado",
      productos: [
        { idProducto: 1, cantidad: 2 },  // Camisa Azul Casual
        { idProducto: 5, cantidad: 1 },  // Camiseta Blanca Básica
      ],
    },
    {
      numeroPedido: 1002,
      idUsuario: 2,
      estado: "en viaje",
      productos: [
        { idProducto: 3, cantidad: 1 },  // Sudadera Negra con Capucha
        { idProducto: 12, cantidad: 2 }, // Zapatos de Vestir
      ],
    },
    {
      numeroPedido: 1003,
      idUsuario: 3,
      estado: "cancelado",
      productos: [
        { idProducto: 7, cantidad: 1 },  // Botas de Montaña
        { idProducto: 18, cantidad: 1 }, // Leggings Deportivos
      ],
    },
    {
      numeroPedido: 1004,
      idUsuario: 4,
      estado: "entregado",
      productos: [
        { idProducto: 4, cantidad: 1 },  // Zapatillas Deportivas Blancas
        { idProducto: 9, cantidad: 1 },  // Abrigo de Lana
      ],
    },
    {
      numeroPedido: 1005,
      idUsuario: 5,
      estado: "en viaje",
      productos: [
        { idProducto: 8, cantidad: 1 },  // Vestido Floral
        { idProducto: 13, cantidad: 3 }, // Guantes de Invierno
      ],
    },
  ];
  
export default pedidos;
  