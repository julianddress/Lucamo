import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/Context/AuthContext';
import { isIpAllowed } from '@/lib/isIpAllowed';

const ProtectedRoute = ({ children }) => {
    const { setIsAllowed, isAllowed, loading, adminSession, setAdminSession } = useAuth();
    const navigate = useNavigate();

    // Asignar la sesión del admin al localStorage
    useEffect(() => {
        const storedSession = localStorage.getItem('adminSession');
        if (storedSession) {
            setAdminSession(JSON.parse(storedSession));
        }
    }, [setAdminSession]);

    // Validar la IP y manejar redirecciones
    useEffect(() => {
        const checkIpAndRedirect = async () => {
            try {
                const IpValidated = await isIpAllowed();
                setIsAllowed(IpValidated);

                if (!IpValidated) {
                    navigate('*');
                } else if (!adminSession) {
                    navigate('/Admin/SignIn');
                }
            } catch (error) {
                console.error('Error al validar la IP:', error);
                setIsAllowed(false);
                navigate('*');
            }
        };

        // Llama solo cuando no esté cargando
        if (!loading) {
            checkIpAndRedirect();
        }
    }, [setIsAllowed, navigate, adminSession, loading]);

    console.log('admin is: ', adminSession)

    return isAllowed ? children : null;
};

export default ProtectedRoute;
