import React from "react";
import Image from "next/image";
import Link from "next/link";

const imageArray = [
    <Image
    className="dark:invert"
    src="/images/zapatillas.png"
    alt="zapatillas"
    width={180}
    height={38}
    priority
  />,
    <Image
    className="dark:invert"
    src="/images/camisas.png"
    alt="camisas"
    width={180}
    height={38}
    priority
  />,
    <Image
    className="dark:invert"
    src="/images/jeans.png"
    alt="jean"
    width={180}
    height={38}
    priority
  />,
    <Image
    className="dark:invert"
    src="/images/remera.jpg"
    alt="remera"
    width={180}
    height={38}
    priority
  />
]

export default async function page({
  params
}: {
  params: Promise<{ categoria: string }>
}) {

  const categoria = (await params).categoria
  let indexImage = 0;
  let nombreProducto ="";
  switch(categoria){
    case "women": 
      indexImage = 0;
      nombreProducto = 0;
      break;
    case "men": 
    indexImage = 1;
    nombreProducto = 1;
    break;
    case "kids": 
    indexImage = 2;
    nombreProducto = 2;
    break;
    case "outlet": 
    indexImage = 3;
    nombreProducto = 3;
    break;
  }

  return (
    <>
      <h1>categoria {categoria}</h1>
      <div >
        <div>
        <Link href={`/producto/${nombreProducto}`}> {imageArray[indexImage]}</Link>
        </div>
      </div>
    </>);
}
