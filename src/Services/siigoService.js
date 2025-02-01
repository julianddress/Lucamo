import siigo from "@/Config/siigo";

export const authenticate = async () => {

    const authUrl = 'https://private-anon-f997a691af-siigoapi.apiary-proxy.com/auth'; 

    const credentials = {
        username: siigo.apiUrl,
        access_key: siigo.apiKey,
    };

    try {
        const response = await fetch(authUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Partner-Id': siigo.partnerId,
            },
            body: JSON.stringify(credentials),
        });

        if (!response.ok) {
            // Manejo de errores
            const errorData = await response.json();
            console.error('Error en la autenticación:', errorData);
            throw new Error('Error en la autenticación. Verifica tus credenciales y configuración.');
        }

        // Procesar respuesta en caso de éxito
        const data = await response.json();
        // console.log('Autenticación exitosa:', data);
        return data.access_token;

    } catch (error) {
        console.error('Error al autenticar:', error.message);
    }
};
