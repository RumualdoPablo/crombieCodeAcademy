'use client';

// 5- Requerimiento: Búsqueda por Nombre de Producto
// Implementar un componente de Búsqueda por Nombre para que los usuarios
// puedan buscar productos por nombre
// Campo de Búsqueda:
// Un input de texto donde los usuarios puedan escribir el nombre del producto.
// Agregar un ícono de lupa o un botón para iniciar la búsqueda.
// Filtrar Productos:
// Las coincidencias deben ser parciales (por ejemplo, buscar "camisa" debería
// mostrar productos como "Camisa azul" y "Camisa blanca").

import { FaSearch } from 'react-icons/fa';

interface SearchBarProps {
    onSearch: (search: string) => void;
}


export default function SearchBar({onSearch}: SearchBarProps) {
    const obtainInput = (event: React.ChangeEvent<HTMLInputElement>) =>{
        onSearch(event.target.value)
    }
    return (
        <>
            <div className='flex bg-gray-600 flex p-4 text-black'>
                <input 
                type="text"
                placeholder="Buscar producto..." 
                className="w-80 py-[4px] pr-10 pl-[4px] border border-none  rounded-l-2xl outline-none text-base "
                onChange={obtainInput}
                >   
                </input>
                <button className="top-1/3 right-[10px] transform-[translateY] bg-white rounded-r-2xl pr-[10px]"><FaSearch/></button>
            </div>
        </>
    )
}