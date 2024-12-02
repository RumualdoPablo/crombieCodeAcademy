import React from "react";

export default async function page({
  params
}: {
  params: Promise<{ categoria: string }>
}) {

  const categoria = (await params).categoria


  return (
    <>
      <h1>categoria {categoria}</h1>
      <div></div>
    </>);
}
