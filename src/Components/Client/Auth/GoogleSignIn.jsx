import React, { useState } from 'react';
import { Button } from '@/Components/Shared/UI/button';
import { supabase } from "@/Supabase/supbaseClient";
import { useAuth } from '@/Context/AuthContext';
import { useNavigate } from 'react-router-dom';

function GoogleSignIn() {

    const navigate = useNavigate()
    const [loading, setLoading] = useState('');
    const { loginWithGoogle } = useAuth();

    const handleGoogleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        try 
        {
            const result = await loginWithGoogle();
            if (result.success) {
                navigate('/')
            }
        } catch (err) {
            console.error("An unexpected error occurred");
        } finally {
            setLoading(false);
        }
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
            Continuar con Google
        </Button>
    );
}

export default GoogleSignIn;
