import { supabase } from "@/Supabase/supbaseClient";

// Función para insertar el usario a usuarios luego de registrarse
export const insertUser = async (userId: string, name: string, lastName: string) => {
        try {

            const result = await supabase.from('usuarios').insert({
                auth_id: userId,
                first_name: name,
                last_name: lastName,
            })

            if(result) console.info(result)

        } catch (err) {
            console.error("Ocurrió un error", err)
        }
}

export const getUserById = async (userId: string) => {
    const { data, error } = await supabase
        .from('usuarios')
        .select('*')
        .eq('auth_id', userId)
        .single();

    if (error) {
        console.error('Error obteniendo el usuario:', error.message);
        return { success: false, error: error.message };
    }

    return { success: true, data };
};

// Obtener la sesion del usuario
export const getUserSession = async () => {
    const { data } = await supabase.auth.getSession();
    return data.session;
};