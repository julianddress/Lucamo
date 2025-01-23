
import { useState, useCallback } from "react";
import { supabase } from "@/Supabase/supbaseClient";
import { useAlert } from "@/Context/AlertContext";

export default function useFetchProducts() {
    
    // Estado para el manejo de alertas
    const { showErrorAlert } = useAlert();
    
    // Estado para la carga 
    const [loading, setLoading] = useState(false);
    
    // Función fetch para traer la tabla products de supabase
    const readProducts = useCallback(async () => {

        setLoading(true);
        const { data, error: readProductError } = await supabase.from("products").select();

        if (readProductError) {
            showErrorAlert("Ocurrió un error al traer los productos");
        }

        console.log(data)
        setLoading(false);
        return data;

    }, [showErrorAlert]);

    return { readProducts, loading };
}

