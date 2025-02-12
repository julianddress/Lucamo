import { Product } from "@/Types/productTypes";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { useAuth } from "./AuthContext";
import { supabase } from "@/Supabase/supbaseClient";
import { Cart } from "@/Types/cartTypes";

interface CartContextType {
    count: number;
    incrementCart: () => void;
    cartProducts: Product[];
    addToCart: (product: Product) => void;
    removeFromCart: (productId: string) => void;
    amount: Cart[];
    increaseQuantity: (userId: string, productId: string) => void;
    decreaseQuantity: (userId: string, productId: string) => void;
    loadingProducts: {[key: string]: boolean}
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {

    const [count, setCount] = useState(0);
    const [cartProducts, setCartProducts] = useState<Product[]>([])
    const [loadingProducts, setLoadingProducts] = useState<{ [key: string]: boolean }>({});
    const [amount, setAmount] = useState<Cart[]>([])
    const {session} = useAuth();
    
    // Cargar los productId desde 'Cart' en Supabase
    useEffect(() => {
        const fetchCart = async () => {
            if (!session) return;

            const { data, error } = await supabase
                .from("cart")
                .select("product_id, products(*)") 
                .eq("user_id", session.user?.id);

            if (error) {
                console.error("Error fetching products:", error);
                return;
            }

            // Mapear los datos para obtener los productos
            const products = data.map((item) => item.products).flat();
            setCartProducts(products);
            setCount(products.length)
        };

        fetchCart();
    }, [session]);

    
    // Obtener Cart desde supabase
    useEffect(() => {

        const fetchQuantity = async () => {
            try {
                const { data, error } = await supabase
                .from('cart')
                .select()
                .eq('user_id', session?.user.id)

                if(error) console.error("Error al traer el carrito", error)
                
                setAmount(data || [])
            } catch (error) {
                console.error(`Occurió un error: ${error}`)
            }
        }
        fetchQuantity();
    }, [session])

    // Función para manejar el contador del carrito
    const incrementCart = () => {
        setCount(cartProducts.length + 1)
    };

    // Función para almacenar los productos agregados al carrito
    const addToCart = async (product: Product) => {
        if (!session) return;

        const { error } = await supabase
            .from("cart")
            .insert([{ user_id: session.user.id, product_id: product.id, quantity: 1 }]);

        if (error) {
            console.error("Error inserting cart item:", error);
            return;
        }

        setCartProducts((prev) => [...prev, product]);
    }

    // Función para quitar un producto del carrito
    const removeFromCart = async (productId: string) => {
        if (!session) return;

        const { error } = await supabase
            .from("cart")
            .delete()
            .eq("user_id", session.user.id)
            .eq("product_id", productId);

        if (error) {
            console.error("Error deleting cart item:", error);
            return;
        }

        // Actualizar estado eliminando el producto
        setCartProducts((prev) => prev.filter((product) => product.id !== productId));
        setAmount((prev) => prev.filter((item) => item.product_id !== productId));
    }

    // Función para añadir mas cantidades al producto
    const increaseQuantity = async (userId: string, productId: string) => {

        setLoadingProducts(prev => ({ ...prev, [productId]: true }));

        const productInCart = amount.find(item => item.product_id === productId);
        if (!productInCart)  return;
        const newQuantity = productInCart.quantity + 1;
        
        const { error } = await supabase
            .from('cart')
            .update({quantity: newQuantity})
            .eq('user_id', userId)
            .eq('product_id', productId)
            .select()
        
        if(error) {
            console.error("Error inserting cart item:", error);
            return;
        }

        // Actualizar el estado local inmediatamente
        setAmount(prev =>
            prev.map(item =>
                item.product_id === productId ? { ...item, quantity: newQuantity } : item
            )
        );

        setLoadingProducts(prev => ({ ...prev, [productId]: false }));
    }

    // Función para disminuir cantidad
    const decreaseQuantity = async (userId: string, productId: string) => {

        setLoadingProducts(prev => ({ ...prev, [productId]: true }));

        const productInCart = amount.find(item => item.product_id === productId);
        if (!productInCart || productInCart.quantity <= 1)  {
            await removeFromCart(productId); 
            return;
        }

        const newQuantity = productInCart.quantity - 1;

        const { error } = await supabase
            .from('cart')
            .update({ quantity: newQuantity })
            .eq('user_id', userId)
            .eq('product_id', productId)
            .select();

        if (error) {
            console.error("Error updating cart item:", error);
            return;
        }

        // Actualizar el estado local inmediatamente
        setAmount(prev =>
            prev.map(item =>
                item.product_id === productId ? { ...item, quantity: newQuantity } : item
            )
        );

        setLoadingProducts(prev => ({ ...prev, [productId]: false }));
    };


    return (
        <CartContext.Provider value={{ count, incrementCart, cartProducts, addToCart, removeFromCart, amount, increaseQuantity, decreaseQuantity, loadingProducts }}>
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
