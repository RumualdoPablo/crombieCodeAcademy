// Esta es la dinámica de category xd
// app\api\category\[papaId]\route.ts

import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient({});


export async function GET(req: NextRequest, {params} : { params: {papaId : string} } ) {

  const parametroId = await params.papaId;  

  const categories = await prisma.category.findUnique({
    where: { id: parseInt(parametroId) },
  });

  if (!categories){
    return new NextResponse(JSON.stringify("no se encontró la categoría"), {status: 404 });
  }

  return new NextResponse(JSON.stringify(categories), { status: 200 });


}


export async function DELETE(req: NextRequest,
  {params}: {params: {papaId: string}}
) {
  const paramId = await params.papaId;

  const categoryDeleted = await prisma.category.delete({
    where: {id: parseInt(paramId)}
  })

  return new NextResponse(JSON.stringify(categoryDeleted), { status: 200 });
}





export async function PUT(
  req: NextRequest,
  { params }: { params: { papaId: string } }
) {
  const paramId = params.papaId; // ID dinámico desde la URL

  try {
    // Obtener los datos enviados en el cuerpo de la solicitud
    const { name } = await req.json();

    // Validar que el nuevo nombre no esté vacío
    if (!name) {
      return new NextResponse(
        JSON.stringify({ error: "No pusiste nada flaco" }),
        { status: 400 }
      );
    }

    // Actualizar la categoría en la base de datos
    const categoryUpdated = await prisma.category.update(
      {
      //if que comprueba el id para editar ese dato específico
      where: { id: parseInt(paramId) },

      //data es el que tiene el nuevo dato
      data: { name },
      }
    );

    // Responder con la categoría actualizada
    return new NextResponse(JSON.stringify(categoryUpdated), { status: 200 });
  } 
  
  catch (error) {
    console.error(error);

    // Manejo de errores, como si no se encuentra la categoría
    return new NextResponse(
      JSON.stringify({ error: "Failed to update category" }),
      { status: 500 }
    );
  }
}
