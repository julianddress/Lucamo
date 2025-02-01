// AuthContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import { supabase } from '@/Supabase/supbaseClient';
import { getClientIp } from '@/lib/getClientIP';
import { isIpAllowed } from '@/lib/isIpAllowed';
import { useAdminAuth } from '@/Hooks/Admin/useAdminAuth';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {

    const {adminSession, setAdminSession, adminData} = useAdminAuth();
    const [isAdmin, setIsAdmin] = useState(false);
    const [isAllowed, setIsAllowed] = useState(null);
    const [session, setSession] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    // Obtener la sesión
    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            setSession(session);
            setLoading(false);
        })

        supabase.auth.onAuthStateChange(({ _event, session }) => {
            if (_event === 'SIGNED_IN') {
                setSession(session);
            } else if (_event === 'SIGNED_OUT') {
                setSession(session);
            }
        })
    }, []);

    // Función para iniciar sesion 
    const SignInUser = async (email, password) => {

        try {
            const { data, error } = await supabase.auth.signInWithPassword({
                email,
                password,
            });

            if (error) {
                console.error('hubo un error al iniciar sesion: ', error);
                return { success: false, error: error.message }
            }

            return { success: true, data }
        }
        catch (error) {
            console.error("an error occured: ", error)
        }
    };

    // Función para registrarse 
    const SignUpNewUser = async (email, password, FirstName, LastName) => {
        const { data, error } = await supabase.auth.signUp({
            email,
            password,
            options: {
                data: {
                    FirstName,
                    LastName,
                }
            }
            // options: { emailRedirectTo: 'http://localhost:3000/' },
        });

        if (error) {
            console.error('hubo un error al registrarse: ', error);
            return { success: false, error }
        }

        return { success: true, data }
    };

    // Función para iniciar sesión con Google
    const loginWithGoogle = async () => {
        const { data, error } = await supabase.auth.signInWithOAuth({
            provider: 'google',
        });

        if (error) {
            console.error('hubo un error al iniciar sesion: ', error);
            return { success: false, error }
        }

        return { success: true, data }
    };

    // Función para cerrar sesion
    const logout = async () => {
        await supabase.auth.signOut();
        setSession(null);
    };

    // Variables del contexto
    const value = {
        
        // Estados
        adminData,
        adminSession,
        isAllowed,
        loading,
        session,
    
        // Setters
        setAdminSession,
        setIsAdmin,
        setIsAllowed,
        setSession,
    
        // Funciones sobre la autenticación de los usuarios
        loginWithGoogle,
        logout,
        SignInUser,
        SignUpNewUser,
    };
    

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}
