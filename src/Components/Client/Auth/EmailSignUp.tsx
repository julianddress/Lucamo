import { Input } from '@/Components/Shared/UI/input';
import { Button } from '@/Components/Shared/UI/button';
import { UserIcon, LockIcon } from 'lucide-react';
import { supabase } from '@/Supabase/supbaseClient';
import { useAuth } from '@/Context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { insertUser } from '@/Services/userService';
import { useAlert } from '@/Context/AlertContext';
import { useState } from 'react';

function EmailSignUp() {

    const navigate = useNavigate();
    const [FirstName, setName] = useState('');
    const [LastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const {showSuccessAlert} = useAlert();

    const { SignUpNewUser } = useAuth();

    // Función para registrar un nuevo usuario
    const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        try {
            const result = await SignUpNewUser(email, password, FirstName, LastName);

            if (result.success) {
                showSuccessAlert('Usuario registrado exitosamente');
    
                // Obtener la sesión actualizada directamente desde Supabase
                const { data: { session } } = await supabase.auth.getSession();
    
                if (session) {
                    const userId = session.user.id;
                    const FirstName = session.user.user_metadata.FirstName;
                    const LastName = session.user.user_metadata.LastName;
    
                    // Insertar usuario en la tabla "usuarios"
                    await insertUser(userId, FirstName, LastName);
                }
                navigate('/');

            } else if (result.error?.message.includes('already registered')) {
                setError('Este correo electrónico ya está registrado. Intenta iniciar sesión.');
            } else {
                setError('Ocurrió un error al registrarse. Inténtalo de nuevo.');
            }

        } catch (err) {
            setError(`Ocurrió un error inesperado. ${err}`);
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
