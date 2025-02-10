import { Product } from "@/Types/productTypes";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";

interface CartContextType {
    count: number;
    incrementCart: () => void;
    cartProducts: Product[];
    setCartData: (product: Product) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {

    const [count, setCount] = useState(0);
    const [cartProducts, setCartProducts] = useState<Product[]>([])

    // Función para manejar el contador del carrito
    const incrementCart = () => {
        setCount(cartProducts.length + 1)
    };

    // Función para almacenar los productos agregados al carrito
    const setCartData = (product: Product) => {
        setCartProducts((prev) => {
            const updatedCart = [...prev, product];
            localStorage.setItem("cartProducts", JSON.stringify(updatedCart));
            console.log("cart is: ", updatedCart)
            return updatedCart;
        });
    }

    // Recuperar productos del localStorage al iniciar
    useEffect(() => {
        const storedCart = localStorage.getItem("cartProducts");
        console.log(storedCart)
        if (storedCart) {
            try {
                // Convertir los datos JSON en un array de objetos
                const parsedProducts: Product[] = JSON.parse(storedCart);
                
                // Establecer en el estado
                setCartProducts(parsedProducts);
                setCount(parsedProducts.length)
            } catch (error) {
                console.error("Error parsing cart data:", error);
                localStorage.removeItem("cartProducts"); // Limpia los datos corruptos
            }
        }
    }, []);

    return (
        <CartContext.Provider value={{ count, incrementCart, cartProducts, setCartData }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
};
