import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient({});

export async function GET(req: NextRequest, {params} : { params: {id : string} } ) {

  const parametroId = await params.id;  

  // COMPROBACION QUE EL PRODUCTO EXISTE
  const producto = await prisma.product.findUnique({
    where: { id: parseInt(parametroId) },
  });
  if (!producto){
    return new NextResponse(JSON.stringify({mensajito: "no se encontró el producto"}),
    {status: 404 }
    );
  }
  return new NextResponse(JSON.stringify(producto), { status: 200 });
}

export async function DELETE(req: NextRequest,
  {params}: {params: {id: string}}
) {

  const parametroId = await params.id;

  // COMPROBACION QUE EL PRODUCTO EXISTE
  const producto = await prisma.product.findUnique({
    where: { id: parseInt(parametroId) },
  });

  if (!producto){
    return new NextResponse(JSON.stringify({mensajito: "no se encontró el producto a borrar"}),
    {status: 404 }
    );
  }

  const productDeleted = await prisma.product.delete({
    where: {id: parseInt(parametroId)}
  })

  return new NextResponse(JSON.stringify(productDeleted), { status: 200 });
}

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const parametroId = params.id; // ID dinámico desde la URL

  try {
    // Obtener los datos enviados en el cuerpo de la solicitud
    const { 
        name, 
        description,
        price,
        stock,
        categoryId
        
    } = await req.json();

  // COMPROBACION QUE EL PRODUCTO EXISTE
  const producto = await prisma.product.findUnique({
    where: { id: parseInt(parametroId) },
  });

  if (!producto){
    return new NextResponse(JSON.stringify({mensajito: "no se encontró el producto a editar"}),
    {status: 404 }
    );
  }

    // Validar que el nuevo nombre no esté vacío
    if (!name && !description && !price && !stock && !categoryId) {
      return new NextResponse(
        JSON.stringify({ error: "No pusiste nada flaco" }),
        { status: 400 }
      );
    }

    // Actualizar la categoría en la base de datos
    const productUpdated = await prisma.product.update(
      {
      //if que comprueba el id para editar ese dato específico
      where: { id: parseInt(parametroId) },

      //data es el que tiene el nuevo dato
      data: { name,
              description,
              price,
              stock,
              categoryId
      },
      }
    );

    // Responder con la categoría actualizada
    return new NextResponse(JSON.stringify(productUpdated), { status: 200 });
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