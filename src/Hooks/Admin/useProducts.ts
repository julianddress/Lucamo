import { useState, useEffect, useMemo } from "react";
import useFetchProducts from "./useFetchProducts";
import { updateProducts } from "@/Services/productService";

interface Product {
    id: string;
    reference: string;
    name: string;
    price: number;
    discount: number;
    featured: boolean;
}

const useProducts = (): [
    Product[],
    boolean,
    (products: Product[]) => void,
    () => Promise<void>,
    Product[],
    (productId: string) => void,
    () => Promise<void>
] => {

    const [products, setProducts] = useState<Product[]>([]);
    const { readProducts, loading } = useFetchProducts();

    useEffect(() => {
        const fetchProducts = async () => {
            const fetchedProducts = await readProducts();
            if (fetchedProducts) {
                setProducts(fetchedProducts);
            }
        };

        fetchProducts(); 
    }, [readProducts]);

    // Función para recargar los datos
    const reloadProducts = async () => {
        const fetchedProducts = await readProducts();
        if (fetchedProducts) {
            setProducts(fetchedProducts);
        }
    };

    // Función para ordenar los productos destacados
    const sortedProducts = useMemo(() => {
        return [...products].sort((a, b) => {
            if (a.featured === b.featured) {
                return 0;
            }
            return a.featured ? -1 : 1;
        });
    }, [products]);

    // Función para manejar el cambio del checkbox
    const toggleFeatured = (productId: string) => {
        setProducts(
            products.map((product) =>
                product.id === productId ? { ...product, featured: !product.featured } : product
            )
        );
    };

    // Función para actualizar los productos utilizando el servicio externo
    const updateFeatureColumn = async () => {
        await updateProducts(products); // Llama a la función desde productService.ts
    };

    return [products, loading, setProducts, reloadProducts, sortedProducts, toggleFeatured, updateFeatureColumn];
};

export default useProducts;
