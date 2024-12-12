import { PrismaClient } from "@prisma/client/extension";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient({});

export async function GET(req: NextRequest, {params}) {
  const parameterId = await params.id;
  const product = await prisma.product.findUnique({
    where: {id:parseInt(parameterId)}
  });
  return new NextResponse(JSON.stringify(product),{status: 200})
}

export async function POST(req:NextRequest) {
const {name,description,price,stock,category} = await req.json();
const productCreated = await prisma.product.create({
  data:{
    name:name,
    description:description,
    stock:stock,
    price:price,
    category:category
  }
});
return new NextResponse(JSON.stringify(productCreated),{status: 200});
}
