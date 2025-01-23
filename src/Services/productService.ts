import { authenticate } from './authService';
import { supabase } from '@/Supabase/supbaseClient';
import siigo from '@/Config/siigo';

interface ProductUpdate {
    id: string;
    reference: string;
    name: string;
    price: number;
    discount: number;
    featured: boolean;
}

// Función para obtener productos desde una API externa
export const fetchProductsAPI = async () => {
    const apiUrl = 'https://private-anon-f997a691af-siigoapi.apiary-proxy.com/v1/products?created_start=2024-08-01';
    const token = await authenticate();

    try {
        const response = await fetch(apiUrl, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
                'Partner-Id': siigo.partnerId, 
            },
        });

        if (!response.ok) {
            throw new Error(`Error en la solicitud: ${response.status}`);
        }

        const products = await response.json(); 
        return products;
    } catch (error) {
        console.error('Error al obtener los productos:', error);
        throw error; 
    }
};

// Función para actualizar productos en la base de datos de Supabase
export const updateProducts = async (products: ProductUpdate[]): Promise<void> => {
    try {
        const updates = products.map(product => ({
            id: product.id,
            reference: product.reference,
            name: product.name,
            price: product.price,
            discount: product.discount,
            featured: product.featured,
        }));

        const { error } = await supabase
            .from("products")
            .upsert(updates, { onConflict: "id" });

        if (error) {
            console.error("Error al actualizar productos:", error);
        } else {
            console.log("Productos actualizados correctamente.");
        }
    } catch (error) {
        console.error("Error inesperado al actualizar productos:", error);
    }
};
