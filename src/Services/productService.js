import { authenticate } from './authService';
import siigo from '@/Config/siigo';

export const fetchProducts = async () => {
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