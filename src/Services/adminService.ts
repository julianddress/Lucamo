import { supabase } from "@/Supabase/supbaseClient";

export const signInAdmin = async (email: string, password: string) => {
    const { data: session, error } = await supabase.auth.signInWithPassword({
        email,
        password
    });

    if (error) {
        console.error('Error al iniciar sesión:', error.message);
        return { success: false, error: error.message };
    }

    // Verificar si el usuario pertenece a la tabla adminUsers
    const { data: adminData, error: adminError } = await supabase
        .from('adminUsers')
        .select('id');

    if (adminError || !adminData) {
        console.error('Usuario no es administrador:', adminError?.message);
        return { success: false, error: 'No tienes permisos de administrador.' };
    }

    const adminIds = adminData.map((item) => item.id.toString()); 
    const isAdmin = adminIds.includes(session?.user?.id);

    return { success: isAdmin, session };
};

export const signOutAdmin = async () => {
    await supabase.auth.signOut();
    return { success: true };
};

export const getAdminById = async (adminId: string) => {
    const { data, error } = await supabase
        .from('adminUsers')
        .select('*')
        .eq('id', adminId)
        .single();

    if (error) {
        console.error('Error obteniendo el administrador:', error.message);
        return { success: false, error: error.message };
    }

    return { success: true, data };
};

export const getAdminSession = async () => {
    const { data } = await supabase.auth.getSession();
    return data.session;
};