export type Order = {
  id: number;
  state: string;
};

const orders: Order[] = [
  { id: 1, state: "En Proceso" },
  { id: 2, state: "Enviado" },
  { id: 3, state: "En proceso" },
  { id: 4, state: "Enviado" },
  { id: 5, state: "En proceso" },
  { id: 6, state: "Enviado" },
  { id: 7, state: "En proceso" },
  { id: 8, state: "En proceso" },
  { id: 9, state: "En Proceso" },
  { id: 10, state: "Enviado" },
];

export default orders;
