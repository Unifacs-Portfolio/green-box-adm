import React, { createContext, useState, useContext, useEffect } from 'react';
import API_BASE_URL from '../apiConfig';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {

    const [token, setToken] = useState(localStorage.getItem('token'));
    const [user, setUser] = useState(() => {
        const storedUser = localStorage.getItem('user');
        return storedUser ? JSON.parse(storedUser) : null;
    });

    useEffect(() => {
        if (token && user) {
            localStorage.setItem('token', token);
            localStorage.setItem('user', JSON.stringify(user));
        } else {
            localStorage.removeItem('token');
            localStorage.removeItem('user');
        }
    }, [token, user]);

   const login = async (email, senha) => {
        try {
            const response = await fetch(`${API_BASE_URL}/api/usuario/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, senha }),
            });

            if (!response.ok) {
                throw new Error('Falha na autenticação. Verifique suas credenciais.');
            }

            const data = await response.json();
            console.log('Dados recebidos da API após login:', data); 
            setToken(data.token);
            
            // ALTERAÇÃO PRINCIPAL AQUI:
            // Em vez de data.user, criamos um objeto com o email da função.
            setUser({ email: email }); 
            
            return true;
        } catch (error) {
            console.error("Erro no login:", error);
            setToken(null);
            setUser(null);
            throw error;
        }
    };

    const logout = () => {
        setToken(null);
        setUser(null);
    };
    // O valor do contexto inclui o token, o usuário e as funções de login e logout
    const value = { token, user, login, logout };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
    return useContext(AuthContext);
};