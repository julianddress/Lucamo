// AuthContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import { supabase } from '@/Supabase/supbaseClient';
import { getClientIp } from '@/lib/getClientIP';
import { isIpAllowed } from '@/lib/isIpAllowed';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {

    const [adminSession, setAdminSession] = useState(null);
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

    // Función para obtener la sesion del admin
    const useAdminAuth = () => {

        useEffect(() => {
            // Recuperar la sesión del administrador de localStorage al cargar la aplicación
            const storedSession = JSON.parse(localStorage.getItem('adminSession'));
            if (storedSession) {
                setAdminSession(storedSession);
            }
            setLoading(false);
        }, []);
    }

    // Función para iniciar sesión como administrador
    const signInAdmin = async (email, password) => {
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
            .select('id')

        console.log(" datos del admin", adminData)
        
        if (adminError || !adminData) {
            console.error('Usuario no es administrador:', adminError?.message);
            return { success: false, error: 'No tienes permisos de administrador.' };
        }

        // Response de la columa id
        const adminIds = adminData.map((item) => item.id.toString()); 
        const isAdmin = adminIds.includes(session?.user?.id);

        // Guardar la sesión en localStorage y actualizar el estado
        localStorage.setItem('adminSession', JSON.stringify(session));
        setAdminSession(session);

        return { success: isAdmin };
    };

    // Función para cerrar sesión manualmente en administrador
    const signOutAdmin = async () => {
        await supabase.auth.signOut();
        localStorage.removeItem('adminSession');
        setAdminSession(null);
    };

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
        adminSession,
        isAllowed,
        loading,
        session,
    
        // Setters
        setAdminSession,
        setIsAllowed,
        setSession,
    
        // Funciones relacionadas con la autenticación de admin
        signInAdmin,
        signOutAdmin,
        useAdminAuth,
    
        // Funciones relacionadas con la autenticación de usuarios
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
