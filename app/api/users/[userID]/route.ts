import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient({});

export async function GET(req: NextRequest, {params}) {

  const parametroId = await params.userID;  
  const users = await prisma.user.findUnique({
    where: { id: parseInt(parametroId) },
  });

  return new NextResponse(JSON.stringify(users), { status: 200 });
}

export async function POST(req: NextRequest) {
  
  const {email, name} = await req.json();
  const userCreated = await prisma.user.create({
    data: {
      email,
      name

  }});

  return new NextResponse(JSON.stringify(userCreated), { status: 200 });
}
