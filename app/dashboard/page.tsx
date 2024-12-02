"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const Dashboard = () => {
    const router = useRouter();

    useEffect(() => {
        const isLoggedIn = localStorage.getItem("isLoggedIn");
        if (!isLoggedIn) {
            router.replace("/login");
            // alert("Ups! Parece que no estas logeado")
        }
    }, []);

    return (
        <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col items-center py-10">
            <header className="w-full max-w-4xl px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold mb-6 text-center">Dashboard</h1>
            </header>
            <main className="w-full max-w-4xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 bg-gray-800 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold mb-2">Estadísticas</h2>
                        <p className="text-gray-400">
                            Revisa tus estadísticas de desempeño y progreso.
                        </p>
                    </div>
                    <div className="p-6 bg-gray-800 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold mb-2">Tareas</h2>
                        <p className="text-gray-400">
                            Aquí puedes ver las tareas pendientes y próximas actividades.
                        </p>
                    </div>
                    <div className="p-6 bg-gray-800 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold mb-2">Notificaciones</h2>
                        <p className="text-gray-400">
                            Mantente al día con las últimas actualizaciones.
                        </p>
                    </div>
                    <div className="p-6 bg-gray-800 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold mb-2">Configuración</h2>
                        <p className="text-gray-400">
                            Administra tus preferencias y ajustes de cuenta.
                        </p>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Dashboard;
