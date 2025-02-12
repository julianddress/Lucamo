import { Lightbulb, ShoppingCart } from 'lucide-react'

function EmptyCart() {
    return (
            <div className="flex flex-col items-center justify-center h-[30vh] text-center">
                <div className="mb-6 relative">
                    <ShoppingCart className="h-24 w-24 text-gray-300" />
                    <Lightbulb className="h-12 w-12 text-yellow-400 absolute -top-2 -right-2 animate-pulse" />
                </div>
                <h2 className="text-2xl font-bold mb-2">Tu carrito está vacío</h2>
                <p className="text-gray-600 mb-6">¡Ilumina tu carrito añadiendo nuestros productos Importados de lujos LED!</p>
            </div>
    )
}

export default EmptyCart