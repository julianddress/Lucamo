import { supabase } from "@/Supabase/supbaseClient";
import { getClientIp } from "./getClientIP";

export const isIpAllowed = async (): Promise<boolean> => {
    try {

        // Esperamos a que la promesa de getClientIp se resuelva
        const ipclient = await getClientIp();

        // Obtenemos las direcciones IP almacenadas en Supabase
        const { data, error } = await supabase
            .from('adminAccess')
            .select('ip_address');

        if (error) {
            console.error('Error al consultar Supabase:', error);
            return false;
        }

        // Response de la columa ip_address
        const ipList = data.map((item) => item.ip_address);
        const isAllowed = ipList.includes(ipclient);

        return isAllowed;
    } catch (error) {
        console.error('Error al validar la IP:', error);
        return false;
    }
};
