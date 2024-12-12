import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient({});
export async function POST(req:NextRequest) {
const {name,description,price,stock,category} = await req.json();
const productCreated = await prisma.product.create({
  data:{
    name:name,
    description:description,
    stock:stock,
    price:price,
    category:category,
    updated_at:new Date
  }
});
return new NextResponse(JSON.stringify(productCreated),{status: 200});
}