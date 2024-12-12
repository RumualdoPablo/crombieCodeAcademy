import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient({});

export async function GET(){
  const categories = await prisma.category.findMany();
  return new NextResponse(JSON.stringify(categories), { status: 200 });
}

export async function POST(req: NextRequest, res: NextResponse){
  const { name } = await req.json();
  const category = await prisma.category.create({ data: { name } });
  return new NextResponse(JSON.stringify(category), { status: 201 });
}

