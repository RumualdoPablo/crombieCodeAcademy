import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient({});
export async function GET() {

  // Obtener todos los productos con sus categorías relacionadas
  const products = await prisma.product.findMany(
      {
          include: { category: true }, 
          // Incluye detalles de la categoría
      }
  );

  if (!products){
      return new NextResponse(JSON.stringify({message: "No products in database"}))
  }
  
  return new NextResponse(JSON.stringify(products), { status: 200 });
}

export async function POST(req:NextRequest) {

const {
  name,
  description,
  price,
  stock,
  categoryID
} = await req.json();

if (!name || !price || !stock || !categoryID) {
  return new NextResponse(
    JSON.stringify({ error: "More fields requeried" }),
    { status: 400 }
  );
}
try {
  const productCreated = await prisma.product.create({
    data: { 
            name,
            description, 
            price, 
            stock, 
            categoryID
          },
  });

  return new NextResponse(JSON.stringify(productCreated),{status: 200});
} catch (error) {
  console.error(error);
  return new NextResponse(
    JSON.stringify({ error: "Failed to create product" }),
    { status: 500 });
}

}