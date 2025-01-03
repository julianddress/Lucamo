import React from 'react';
import { Button } from '@/Components/UI/button';
import { supabase } from "@/Supabase/supbaseClient";
import { useAuth } from '@/Context/AuthContext';

function GoogleSignIn() {
    
    const { loginWithGoogle } = useAuth();

    const handleGoogleLogin = () => {
        loginWithGoogle();
    };

    return (
        <Button
            variant="outline"
            className="w-full"
            onClick={handleGoogleLogin}
        >
            <img
                src="https://www.google.com/favicon.ico"
                alt="Google"
                className="w-5 h-5 mr-2"
            />
            Iniciar sesión con Google
        </Button>
    );
}

export default GoogleSignIn;
