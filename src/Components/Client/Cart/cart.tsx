import {useState} from "react";
import { useCart } from "@/Context/CartContext";
import { ShoppingCart } from 'lucide-react'

const CartLogo = () =>{

    const {count} = useCart();
    const [isOpen, setIsOpen] = useState(false)

    return <>

            <div className="fixed left-4 bottom-6 z-50">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    // size="icon"
                    className="flex justify-center items-center h-14 w-14 rounded-full shadow-lg hover:shadow-xl transition-shadow relative bg-gradient-to-r from-violet-500 to-purple-500 hover:from-violet-600 hover:to-purple-600"
                >
                    <ShoppingCart className="h-6 w-6 text-white" />
                    <div className="absolute -top-1 -right-1 h-6 w-6 rounded-full flex items-center justify-center bg-red-600 text-white"
                    >
                        {count}
                    </div>
                </button>  
            </div>

        </>

}

export {CartLogo};