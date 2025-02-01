import { useState, useEffect } from "react";
import { Session } from "@supabase/supabase-js";
import { supabase } from "@/Supabase/supbaseClient";
import { getAdminSession } from "@/Services/adminService";
import { getAdminById } from "@/Services/adminService";
import { adminUser } from "@/Types/adminTypes";

export function useAdminAuth() {
    const [adminSession, setAdminSession] = useState<Session | null>(null);
    const [adminData, setAdminData] = useState<adminUser>();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        
        // Obtener sesión inicial
        getAdminSession().then((session) => {
            setAdminSession(session);
            setLoading(false);
        });

        // Escuchar cambios en la sesión
        supabase.auth.onAuthStateChange(( _event, session ) => {
            if (_event === 'SIGNED_IN') {
                setAdminSession(session);
            } else if (_event === 'SIGNED_OUT') {
                setAdminSession(session);
            }
        })

    }, []);

    // Renderiza para asignar los datos del admin loggeado a adminData
    useEffect(() => {
        const fetchAdminData = async () => {
            if (adminSession) {
                const user = await getAdminById(adminSession.user.id)
                setAdminData(user.data)
            }
        }
        fetchAdminData()
    }, [adminSession])

    return { adminSession, loading, setAdminSession, adminData };
}
