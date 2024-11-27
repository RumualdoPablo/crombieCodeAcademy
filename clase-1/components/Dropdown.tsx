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
    <div className="relative">
        
      {/* Botón del dropdown */}
      <button
        onClick={toggleMenu}
        className="flex items-center justify-center px-4 py-2 h-10 w-10 text-sm font-medium text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300"
      >
        🙎🏼‍♂️
      </button>

      {/* Contenido del dropdown */}
      <div
        className={`absolute right-0 mt-2 w-48 bg-gray-100 rounded-md shadow-lg overflow-hidden transition-all duration-300 ease-in-out text-center ${
          isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="py-2 ">
          <li>
            <Link
              href="/dashboard"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-lg transition-all"
            >
              Dashboard
            </Link>
          </li>
          <hr className=""/>
          <li>
            <button
              onClick={desloguear}
              className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 text-center hover:text-lg transition-all"
            >
              Cerrar sesión
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
