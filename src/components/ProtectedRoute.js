import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = () => {
    const { token } = useAuth();

    
    // BLOCO DE AUTENTICAÇÃO TEMPORARIAMENTE DESLIGADO PARA TESTES
    if (!token) {
        return <Navigate to="/login" replace />;
    }
    

    // A linha abaixo agora sempre será executada, permitindo o acesso direto
    return <Outlet />;
};

export default ProtectedRoute;