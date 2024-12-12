
//app\api\product\route.ts

import { PrismaClient } from "@prisma/client"; 

import { NextRequest, NextResponse } from "next/server"; 

// Inicializar el cliente de Prisma
const prisma = new PrismaClient();

// Ruta GET para listar todos los productos
export async function GET() {

    // Obtener todos los productos con sus categorías relacionadas
    const products = await prisma.product.findMany(
        {
            include: { category: true }, 
            // Incluye detalles de la categoría
        }
    );

    if (!products){
        return new NextResponse(JSON.stringify({message: "no se encontraron productos!"}))
    }
    
    // Responder con los productos obtenidos
    return new NextResponse(JSON.stringify(products), { status: 200 });


  
  

}




// Ruta POST para crear un nuevo producto
export async function POST(req: NextRequest) {

    try {



      // Leer los datos enviados en el cuerpo de la solicitud
      const { 
        name, 
        description, 
        price, 
        stock, 
        categoryId 
        } = await req.json();
  
      // Validar que todos los campos requeridos estén presentes
      if (!name || !price || !stock || !categoryId) {
        return new NextResponse(
          JSON.stringify({ error: "faltan completar campos" }),
          { status: 400 }
        );
      }
  
      // Crear el nuevo producto en la base de datos
      const newProduct = await prisma.product.create({
        data: {  name,
                 description, 
                 price, 
                 stock, 
                 categoryId 
              },
      });
  
      // Responder con el producto creado
      return new NextResponse(JSON.stringify(newProduct), { status: 201 });
    } 
    
    catch (error) {
    
        // Manejar errores y devolver una respuesta de error
      return new NextResponse(
        JSON.stringify({ error: "Error en la conexion a la base de datos" }),
        { status: 500 }
      );
    }
  }