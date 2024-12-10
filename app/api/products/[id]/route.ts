import { NextResponse } from "next/server";

const products = [
  { id: 1, name: "Laptop", price: 1200 },
  { id: 2, name: "Phone", price: 800 },
];

export async function GET(req: Request, { params: {} }) {
  const { id } = params;
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return NextResponse.json(
      { message: `Product with id ${id} not found` },
      { status: 404 }
    );
  }

  return NextResponse.json(product);
}

export async function DELETE(req, { params }:{para}) {
  const { id } = params;
  const index = products.findIndex((p) => p.id === parseInt(id));

  if (index === -1) {
    return NextResponse.json(
      { message: `Product with id ${id} not found` },
      { status: 404 }
    );
  }

  products.splice(index, 1);

  return NextResponse.json(
    { message: `Product with id ${id} deleted successfully` },
    { status: 200 }
  );
}
