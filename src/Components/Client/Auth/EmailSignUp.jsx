import React, { useState } from 'react';
import { Input } from '@/Components/Shared/UI/input';
import { Button } from '@/Components/Shared/UI/button';
import { UserIcon, LockIcon } from 'lucide-react';
import { supabase } from '@/Supabase/supbaseClient';
import { useAuth } from '@/Context/AuthContext';
import { Navigate, useNavigate } from 'react-router-dom';

function EmailSignUp() {

    const navigate = useNavigate();
    const [FirstName, setName] = useState('');
    const [LastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState('');

    const { SignUpNewUser, session } = useAuth();

    const handleSignUp = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const result = await SignUpNewUser(email, password, FirstName, LastName);

            if (result.success) {
                navigate('/');
                console.log('Registro exitoso');

                // INSERT USER INTO PROFILE TABLE
                try {
                    const userId = session?.user?.id;

                    const result = await supabase.from('profiles').insert({
                        id: userId,
                        FirstName,
                        LastName,
                        Role: 'user',
                    })
                } catch (err) {
                    console.log("Ocurrió un error", err)
                }

            } else if (result.error.message.includes('already registered')) {
                setError('Este correo electrónico ya está registrado. Intenta iniciar sesión.');
            } else {
                setError('Ocurrió un error al registrarse. Inténtalo de nuevo.');
            }

        } catch (err) {
            setError('Ocurrió un error inesperado.');
        } finally {
            setLoading(false);
        }
    };


    return (
        <form className="space-y-4" onSubmit={handleSignUp} >
            <div className='flex gap-4'>
                <Input 
                    type='' 
                    placeholder='Nombre'
                    className='pl-10 px-2'
                    value={FirstName}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <Input 
                    type=''
                    placeholder='Apellido'
                    className='pl-10 px-2'
                    value={LastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                />
            </div>
            <div className="relative">
                <UserIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                    type="email"
                    placeholder="Correo Electrónico"
                    className="pl-10"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <div className="relative">
                <LockIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                    type="password"
                    placeholder="Contraseña"
                    className="pl-10"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>

            <Button type='submit' disabled={loading} className="w-full bg-gradient-to-r from-indigo-500 to-fuchsia-500 hover:from-indigo-700 hover:to-fuchsia-700 text-white">
                Registrarme
            </Button>

            {error && <p className='text-center text-red-500 pt-4'>{error}</p>}
        </form>
    );
}

export default EmailSignUp;
