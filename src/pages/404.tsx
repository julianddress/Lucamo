import { useAdmin } from "@/Context/AdminContext";
import { LightbulbIcon, HomeIcon } from "lucide-react"

export default function NotFound() {

    const { adminSession } = useAdmin();

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-900 to-black flex items-center justify-center px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 text-center">
                <div className="relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-32 h-32 bg-purple-500 rounded-full opacity-50 blur-xl animate-pulse"></div>
                    </div>
                        <LightbulbIcon className="mx-auto h-24 w-24 text-yellow-300 relative z-10 animate-bounce" />
                    </div>
                    <h1 className="mt-6 text-5xl font-extrabold text-white tracking-tight sm:text-6xl">404</h1>
                    <p className="mt-2 text-3xl font-bold text-purple-300 sm:text-4xl">¡Ups! Esta página se fundió</p>
                    <p className="mt-4 text-xl text-gray-300">
                        Parece que has llegado a un área sin iluminación. No te preocupes, te guiaremos de vuelta a la luz.
                    </p>
                <div className="mt-8">
                    <a
                        href={adminSession ? '/Admin/Inicio' : '/'}
                        className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-black bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 transition-colors duration-300"
                    >
                        <HomeIcon className="mr-2 h-5 w-5" />
                        Volver al inicio
                    </a>
                </div>
            </div>
        </div>
    )
}

