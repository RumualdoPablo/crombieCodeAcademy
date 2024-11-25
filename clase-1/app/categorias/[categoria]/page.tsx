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
      nombreProducto = "zapatilla";
      break;
    case "men": 
    indexImage = 1;
    nombreProducto = "camisa";
    break;
    case "kids": 
    indexImage = 2;
    nombreProducto = "jean";
    break;
    case "outlet": 
    indexImage = 3;
    nombreProducto = "remera";
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
