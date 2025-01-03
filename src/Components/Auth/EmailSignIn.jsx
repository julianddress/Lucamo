import React, { useState } from 'react';
import { Input } from '@/Components/UI/input';
import { Button } from '@/Components/UI/button';
import { UserIcon, LockIcon } from 'lucide-react';
import { supabase } from '@/Supabase/supbaseClient';

function EmailSignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <form className="space-y-4" >
            <div className="relative">
                <UserIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                    type="email"
                    placeholder="Correo Electrónico"
                    className="pl-10"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
                />
            </div>
            <Button className="w-full bg-gradient-to-r from-indigo-500 to-fuchsia-500 hover:from-indigo-700 hover:to-fuchsia-700 text-white">
                Iniciar sesión
            </Button>
        </form>
    );
}

export default EmailSignIn;
