
// app\api\category\route.ts

import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient({});

export async function GET() {
  
  const categories = await prisma.category.findMany();

  return new NextResponse(JSON.stringify(categories), { status: 200 });
}


export async function POST(req: NextRequest) {
  
  const { name } = await req.json();
  const categoryCreated = await prisma.category.create({
    data: {
      
      name

  }});

  return new NextResponse(JSON.stringify(categoryCreated), { status: 200 });
}
