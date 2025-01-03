// AuthContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import { supabase } from '@/Supabase/supbaseClient'; 
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null); 
    const [loading, setLoading] = useState(true);  // Variable para mostrar un spinner mientras se carga la autenticación

    const navigate = useNavigate();

    // Verificar si el usuario está autenticado
    useEffect(() => {
        async function getUserData() {
            await supabase.auth.getUser().then((value) =>{
                if(value.data?.user){
                    setUser(value.data.user);
                    setLoading(false);  // Finaliza la carga después de verificar el usuario
                    navigate('/');
                }
            })
        }
        getUserData();
    }, [navigate]);

    const login = (userData) => setUser(userData);

    // Función para iniciar sesión con Google
    const loginWithGoogle = async () => {
        try {
            const { data, error } = await supabase.auth.signInWithOAuth({
                provider: 'google',
            });
    
            if (error) {
                console.error('Error de inicio de sesión:', error.message);
            } else {
                console.log('Inicio de sesión con Google exitoso');
                
                // Recuperar el usuario actual desde Supabase
                const { data: userData } = await supabase.auth.getUser();
                setUser(userData.user); // Establecer el usuario
                navigate('/'); // Redirigir a Home
            }
        } catch (error) {
            console.error('Error al intentar iniciar sesión con Google:', error.message);
        }
    };
    

    // Función para logout
    const logout = async () => {
        await supabase.auth.signOut();
        setUser(null); 
        setLoading(false);
        navigate('/');  
    };

    return (
        <AuthContext.Provider value={{ user, loading, login, loginWithGoogle, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
