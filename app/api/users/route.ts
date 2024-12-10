import { NextRequest, NextResponse } from "next/server";

export type User = {
  nombre: string;
  puesto: string;
};

const users: User[] = [
  { puesto: "Back-end", nombre: "Pablo" },
  { puesto: "Back-end", nombre: "Lauti" },
];

export async function GET(request: NextRequest) {
  return new NextResponse(JSON.stringify(users), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json(); // Obtener datos del cuerpo
    const requiredFields = ["nombre", "email", "password"];
    const missingFields = requiredFields.filter((field) => !body[field]);

    if (missingFields.length) {
      return new Response(
        JSON.stringify({
          error: "Missing required fields",
          missingFields,
        }),
        {
          status: 400, // Bad Request
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    users.push(body);
    return new Response(
      JSON.stringify({ message: "User created!", data: body }),
      {
        status: 201,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error: any) {
    return new Response(
      JSON.stringify({
        error: "Invalid request",
        details: error.message,
      }),
      {
        status: 500, // Internal Server Error
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}

export async function PUT(request: NextRequest) {
  const body = await request.json();
  return new Response(
    JSON.stringify({ message: "User updated!", data: body }),
    {
      status: 200,
      headers: { "Content-Type": "application/json" },
    }
  );
}

export async function DELETE(request: NextRequest) {
  return new Response(JSON.stringify({ message: "User deleted!" }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
