import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { isIpAllowed } from '@/lib/isIpAllowed';
import { getAdminSession } from '@/Services/adminService';
import { useAdmin } from '@/Context/AdminContext';

interface ProtectedRouteProps {
    children: React.ReactNode
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
    
    const { setIsAllowed, isAllowed, loading, adminSession, setAdminSession, setIsAdmin } = useAdmin();
    const navigate = useNavigate();

    useEffect(() => {

        // Llama al backend para validar si hay una sesión activa
        const verifySession = async () => {
            try {
                const response = await getAdminSession()
                setAdminSession(response)
                setIsAdmin(true);
            } catch (error) {
                console.error("Error verificando sesión:", error)
            }
        }

        verifySession()
    }, [])

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

    return isAllowed ? children : null;
};

export default ProtectedRoute;
