import React, { createContext, useContext, useEffect, useState } from 'react';
import { supabase } from '@/Supabase/supbaseClient';
import { Session } from "@supabase/supabase-js";
import { adminUser } from '@/Types/adminTypes';
import { getAdminById, getAdminSession } from '@/Services/adminService';

interface AdminContextType {
    adminData?: adminUser;
    isAdmin: boolean;
    isAllowed: boolean;
    adminSession: Session | null;
    setAdminSession: React.Dispatch<React.SetStateAction<Session | null>>;
    setIsAllowed: React.Dispatch<React.SetStateAction<boolean>>;
    setIsAdmin: React.Dispatch<React.SetStateAction<boolean>>;
    loading: boolean;
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

interface AdminProviderProps {
    children: React.ReactNode;
}

export const AdminProvider: React.FC<AdminProviderProps> = ({ children }) => {

    const [adminSession, setAdminSession] = useState<Session | null>(null);
    const [isAllowed, setIsAllowed] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    const [adminData, setAdminData] = useState<adminUser>();
    const [loading, setLoading] = useState(true);

    // Obtener la sesión
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

    // Variables del contexto
    const value = {
        
        // Estados
        adminData,
        isAdmin,
        isAllowed,
        adminSession,
    
        // Setters
        setAdminSession,
        setIsAllowed,
        setIsAdmin,

        loading,

    };
    

    return (
        <AdminContext.Provider value={value}>
            {children}
        </AdminContext.Provider>
    );
}

export const useAdmin = () => {
    const context = useContext(AdminContext);
    if (!context) {
        throw new Error("useAdmin must be used within a AdminProvider");
    }
    return context;
}