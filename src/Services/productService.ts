import { authenticate } from './siigoService';
import { supabase } from '@/Supabase/supbaseClient';
import siigo from '@/Config/siigo';
import { Product } from '@/Types/productTypes';

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

// Función para trear los productos de la base de dtaos de supabase
export const fetchProducts = async () => {
    try {
        const { data, error } = await supabase
        .from("products")
        .select()

        if(error) console.error("Ha ocurrido un problema al traer los productos")

        return data

    } catch (error) {
        console.log(error)
    }
}

// Función para trear los productos destacados de la base de dtaos de supabase
export const fetchFeaturedProducts = async () => {
    try {
        const { data, error } = await supabase
        .from("products")
        .select()
        .eq("featured", true)

        if(error) console.error("Ha ocurrido un problema al traer los productos destacados")

        return data

    } catch (error) {
        console.log(error)
    }
}

// Función para actualizar productos en la base de datos de Supabase
export const upsertProducts = async (products: Product[]): Promise<void> => {
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
        } 

    } catch (error) {
        console.error("Error inesperado al actualizar productos:", error);
    }
};

// Función para traer el inventario de la base de datos de supabase
export const fetchInventory = async () => {
    try {
        const { data, error } = await supabase
            .from('inventory')
            .select()
        
        if(error) console.error('occurio un error al traer el inventario')

        return data
    } catch (error) {
        console.error("Error fue: ", error)
    }
}

// Función para traer las categorias de la base de datos de supabase
export const fetchCategory = async () => {
    try {
        const { data, error } = await supabase
            .from('product_category')
            .select()
        
        if(error) console.error('occurio un error al traer las categorias')

        return data
    } catch (error) {
        console.error("Error fue: ", error)
    }
}

// Función para traer la tabla images de la base de datos de supabase
export const fetchImages = async () => {
    try {
        const { data, error } = await supabase
            .from("product_images")
            .select()
        
        if(error)  console.error("Ha ocurrido un problema al traer las images")

        return data
    } catch (error) {
        console.error(error);
    }
}