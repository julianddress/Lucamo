import { Product } from "@/Types/productTypes";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { fetchFeaturedProducts, fetchProducts} from '@/Services/productService';

interface ProductContextType {
    products: Product[];
    featuredProducts: Product[];
    selected: string;
    selectedProduct: (productId: string) => void;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const ProductProvider = ({ children }: { children: ReactNode }) => {

    const [selected, setSelected] = useState("");
    const [ featuredProducts , setFeaturedProducts ] = useState<Product[]>([]);
    const [ products , setProducts ] = useState<Product[]>([]); 
    
    // Renderiza para traer la tabla productos
    useEffect(() => {
        const handleProduct = async () => {
        const result = await fetchProducts();
            if(result) setProducts(result)
        } 
        handleProduct();
    }, [])

    // Renderiza para traer los productos destacados
    useEffect(() => {
        const handleProduct = async () => {
        const result = await fetchFeaturedProducts();
            if(result) setFeaturedProducts(result)
        } 
        handleProduct();
    }, [])

    // Capturar el producto seleccionado
    const selectedProduct = (productId: string) => {
        setSelected(productId)
    }

    return (
        <ProductContext.Provider value={{ featuredProducts, products, selected, selectedProduct }}>
            {children}
        </ProductContext.Provider>
    );
};

export const useProduct = () => {
    const context = useContext(ProductContext);
    if (!context) {
        throw new Error("useProduct must be used within a ProductProvider");
    }
    return context;
};
