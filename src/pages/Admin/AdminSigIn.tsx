import AnimatedBackground from '@/Components/Admin/AnimatedBackground/AnimatedBackground'
import EmailSignIn from '@/Components/Admin/Auth/EmailSignIn'
import { useAuth } from '@/Context/AuthContext';
import impolujos from '@/assets/img/impolujos.jpg'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AdminSignIn() {

    const { adminSession } = useAuth();
    const navigate = useNavigate();

    // Solo permitir el acceso cuando no hay una sesion activa
    useEffect(() => {
        if (adminSession) {
            navigate("/Admin/Inicio"); 
        }
    }, [adminSession, navigate]);

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 flex items-center justify-center p-4 relative overflow-hidden">
            <AnimatedBackground />
            <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg shadow-xl overflow-hidden max-w-4xl w-full flex relative z-10">
                <div className="w-1/2 p-8 self-center">
                    <div className="mb-8">
                        <h1 className="text-3xl font-bold text-white mb-2">LUCAMO</h1>
                        <p className="text-gray-300">Panel de Administración</p>
                    </div>
                    <EmailSignIn />
                </div>
                <div className="w-1/2 relative">
                    <img
                        className='w-max'
                        src={impolujos}
                        alt="Lucamoy Admin"
                    />
                </div>
            </div>
        </div>
    )
}

