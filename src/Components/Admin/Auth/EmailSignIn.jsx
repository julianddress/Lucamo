import React, { useState } from 'react';
import { Input } from '@/Components/Shared/UI/input';
import { Button } from '@/Components/Shared/UI/button';
import { UserIcon, LockIcon } from 'lucide-react';
import { supabase } from '@/Supabase/supbaseClient';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/Context/AuthContext';

function EmailSignIn() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState('');
    const { signInAdmin } = useAuth();

    const handleSignIn = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const result = await signInAdmin(email, password);

            if (result.success) {
                navigate('/Admin/Inicio');
                console.log('Inicio de sesion exitoso');

            } else if (result.error.message.includes('Invalid login credentials')) {
                setError('Credenciales incorrectas. Intenta de nuevo.');
            } else {
                setError('Ocurrió un error al iniciar sesion. Inténtalo de nuevo.');
            }

        } catch (err) {
            setError('Ocurrió un error inesperado.');
        } finally {
            setLoading(false);
        }
    };

    return (

        <form className="space-y-6" onSubmit={handleSignIn}>
            <div>
                <label htmlFor="username" className="block text-sm font-medium text-gray-100 mb-1">
                    Usuario
                </label>
                <Input 
                    type="email"
                    value={email}
                    placeholder="Correo Electronico"
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-white bg-opacity-20 text-white placeholder-gray-400" />
            </div>
            <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-100 mb-1">
                    Contraseña
                </label>
                <Input
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    placeholder="Contraseña"
                    className="bg-white bg-opacity-20 text-white placeholder-gray-400 border-none" />
            </div>
            <Button 
                type='submit' 
                disabled={loading} 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300"

            >
                Iniciar Sesión
            </Button>

            {error && <span className='text-center text-red-400 pt-4'>{error}</span>}
        </form>

    )
}

export default EmailSignIn;
