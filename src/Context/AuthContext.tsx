import { createContext, useContext, useState, useEffect } from 'react';
import { supabase } from '@/Supabase/supbaseClient';
import { getUserById, getUserSession } from '@/Services/userService'; 
import { Session } from "@supabase/supabase-js";
import { User } from '@/Types/userTypes';

interface AuthContextType {
    loading: boolean;
    session: Session | null;
    setSession: React.Dispatch<React.SetStateAction<Session | null>>,
    loginWithGoogle: () => Promise<{ success: boolean; data?: object, error?: { message: string }}>;
    logout: () => void;
    SignInUser: (email: string, password: string) => Promise<{ success: boolean; data?: object, error?: { message: string }}>;
    SignUpNewUser: (email: string, password: string, FirstName: string, LastName: string) => Promise<{ success: boolean; data?: object, error?: { message: string } }>;
    userData: User | undefined;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
    children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {

    const [session, setSession] = useState<Session | null>(null);
    const [loading, setLoading] = useState(true);
    const [userData, setUserData] = useState<User>();

    // Obtener la sesión
    useEffect(() => {

        // Obtener sesión inicial
        getUserSession().then((session) => {
            setSession(session);
            setLoading(false);
        })

        supabase.auth.onAuthStateChange(( _event, session ) => {
            if (_event === 'SIGNED_IN') {
                setSession(session);
            } else if (_event === 'SIGNED_OUT') {
                setSession(session);
            }
        })
    }, []);

    // Renderiza para asignar los datos del admin loggeado a adminData
    useEffect(() => {
        const fetchAdminData = async () => {
            if (session) {
                const user = await getUserById(session.user?.id)
                setUserData(user.data)
            }
        }
        fetchAdminData()
    }, [session])

    // Función para iniciar sesion 
    const SignInUser = async (email: string, password: string) => {

        try {
            const { data, error } = await supabase.auth.signInWithPassword({
                email,
                password,
            });

            if (error) {
                console.error('hubo un error al iniciar sesion: ', error);
                return { success: false, error: { message: error.message }}
            }

            return { success: true, data }
        }
        catch (error) {
            console.error("an error occured: ", error)
            return { success: false, error: { message: 'An unknown error occurred' } };
        }
    };

    // Función para registrarse 
    const SignUpNewUser = async (email: string, password: string, FirstName: string, LastName: string) => {
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
        loading,
        session,
    
        // Setters
        setSession,
    
        // Funciones sobre la autenticación de los usuarios
        loginWithGoogle,
        logout,
        SignInUser,
        SignUpNewUser,

        userData,
    };
    

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => {
    const context = useContext(AuthContext);
        if (!context) {
            throw new Error("useAdmin must be used within a AdminProvider");
        }
        return context;
}
