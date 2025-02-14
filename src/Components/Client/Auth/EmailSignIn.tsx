import { Input } from '@/Components/Shared/UI/input';
import { Button } from '@/Components/Shared/UI/button';
import { UserIcon, LockIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/Context/AuthContext';
import { useAlert } from '@/Context/AlertContext';
import { useState } from 'react';

function EmailSignIn() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const { SignInUser } = useAuth();
    const {showSuccessAlert} = useAlert();

    const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        try {
            const result = await SignInUser(email, password);

            if (result.success) {
                navigate('/');
                showSuccessAlert('Inicio de sesion exitoso');

            }  else if (result.error?.message.includes('Invalid login credentials')) {
                setError('Credenciales incorrectas. Intenta de nuevo.');
            } else {
                setError('Correo o contraseña incorrectos. Inténtalo de nuevo.');
            }

        } catch (err) {
            setError(`Ocurrió un error inesperado. ${err}`);
        } finally {
            setLoading(false);
        }
    };

    return (
        <form className="space-y-4" onSubmit={handleSignIn}>
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
            <Button type='submit' disabled={loading} className="w-full bg-gradient-to-r from-indigo-500 to-fuchsia-500 hover:from-indigo-700 hover:to-fuchsia-700 text-white">
                Iniciar sesión
            </Button>

            {error && <span className='text-center text-red-400 pt-4'>{error}</span>}
        </form>
    );
}

export default EmailSignIn;
