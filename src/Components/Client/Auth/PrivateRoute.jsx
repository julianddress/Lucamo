import React, {useEffect} from 'react';
import { useAuth } from '@/Context/AuthContext';
import { useNavigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {

    return children;
};

export default PrivateRoute;
