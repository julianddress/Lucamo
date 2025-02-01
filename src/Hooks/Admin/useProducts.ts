import { useState, useEffect, useMemo, useCallback } from "react";
import { supabase } from "@/Supabase/supbaseClient";
import { useAlert } from "@/Context/AlertContext";
import { Product } from "@/Types/productTypes";
import { upsertProducts } from "@/Services/productService";

const useProducts = (): [
    Product[],
    boolean,
    (products: Product[]) => void,
    () => Promise<void>,
    Product[],
    (productId: string) => void,
    () => Promise<void>,
    () => void,

] => {
    const { showErrorAlert } = useAlert();

    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(false);

    // Función fetch para traer la tabla products de Supabase
    const readProducts = useCallback(async (event?: React.MouseEvent<HTMLButtonElement>) => {

        event?.preventDefault();
        setLoading(true);

        const { data, error: readProductError } = await supabase
            .from("products")
            .select();

        if (readProductError) showErrorAlert("Ocurrió un error al traer los productos");
        
        setLoading(false);
        return data;

    }, [showErrorAlert]);

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
        setLoading(true);
        const fetchedProducts = await readProducts();
        if (fetchedProducts) {
            setProducts(fetchedProducts);
        }
    };

    // Función para actualizar los datos en el UI
    const refreshForm = () => {
        setLoading(true);
        reloadProducts();
    }

    // Función para ordenar los productos destacados
    const sortedProducts = useMemo(() => {
        return [...products].sort((a, b) => (a.featured === b.featured ? 0 : a.featured ? -1 : 1));
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
        await upsertProducts(products);
    };

    return [
        products,
        loading,
        setProducts,
        reloadProducts,
        sortedProducts,
        toggleFeatured,
        updateFeatureColumn,
        refreshForm,
    ];
};

export default useProducts;
