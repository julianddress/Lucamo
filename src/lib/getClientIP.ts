export const getClientIp = async (): Promise<string | null> => {
    try {
        const response = await fetch('https://api.ipify.org?format=json');
        const data = await response.json();
        return data.ip;
    } catch (error) {
        console.error('Error al obtener la IP:', error);
        return null;
    }
};