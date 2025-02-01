import { Construction, PenToolIcon as Tools } from "lucide-react"

interface UnderDevelopmentProps {
    message?: string
}

export function UnderDevelopment({ message }: UnderDevelopmentProps) {
    return (
        <div className="flex flex-col items-center justify-center min-h-max mt-[5%]">
            <div className="text-center p-8 bg-white rounded-lg shadow-md max-w-md">
                <div className="flex justify-center mb-4">
                    <Construction className="w-16 h-16 text-yellow-500 mr-2" />
                    <Tools className="w-16 h-16 text-blue-500 ml-2" />
                </div>
                <h1 className="text-2xl font-bold text-gray-800 mb-4">En Desarrollo</h1>
                <p className="text-gray-600">
                {message ||
                    "Lo sentimos, esta característica aún no ha sido desarrollada. Estamos trabajando para traerte más experiencias increíbles en este sitio."}
                </p>
            </div>
        </div>
    )
}

