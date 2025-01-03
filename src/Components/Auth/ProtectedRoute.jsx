import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '@/Context/AuthContext';
import Loading from '../Loading/Loading';

const ProtectedRoute = ({ children }) => {

    const { user, loading } = useAuth();

    // Mostrar el componente de carga si el estado de autenticación aún se está verificando
    if (loading) return <Loading />;

    // Redirigir a /sign-in si no hay un usuario autenticado
    if (!user) return <Navigate to="/signin" replace />;

    // Si el usuario está autenticado, renderizar los hijos
    return children;
};

export default ProtectedRoute;
