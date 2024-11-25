"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";


const Dropdown = () => {

    const router = useRouter();

    const [isOpen, setIsOpen] = useState(false);

    const [isLoggedOut, setisLoggedOut] = useState(true);



    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };


    const desloguear = () => {
        setisLoggedOut(!isLoggedOut);
        
        localStorage.setItem("isLoggedIn", "false");

        router.push("/login");
        
    };

  return (
    <>
    
        <button className="bg-slate-500 w-10 h-10 p-3 rounded-lg text-white flex justify-center items-center font-bold hover:bg-slate-300" onClick={toggleMenu}>

            🙎🏼‍♂️
        

        </button>

        {
            isOpen && (
                <div className="absolute top-10 right-0 bg-white w-48 p-3 flex flex-col text-black rounded-lg mt-2">
                    <Link href="/dashboard">
                        Perfil
                    </Link>

                    <button onClick={desloguear}>
                        salir
                    </button>
                </div>
            )
        }




    
    </>
  )
}

export default Dropdown
