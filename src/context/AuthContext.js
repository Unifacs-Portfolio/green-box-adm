import React, { createContext, useState, useContext, useEffect } from 'react';

// Cria o Contexto
const AuthContext = createContext(null);

// Cria o Provedor do Contexto
export const AuthProvider = ({ children }) => {
    // Tenta pegar o token do localStorage ao iniciar
    const [token, setToken] = useState(localStorage.getItem('token'));

    // Efeito para atualizar o localStorage sempre que o token mudar
    useEffect(() => {
        if (token) {
            localStorage.setItem('token', token);
        } else {
            localStorage.removeItem('token');
        }
    }, [token]);

    // Função para fazer o login
    const login = async (email, senha) => {
        try {
            const response = await fetch('http://localhost:3000/api/usuario/login', { // Altere para a URL de produção se necessário
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, senha }),
            });

            if (!response.ok) {
                throw new Error('Falha na autenticação. Verifique suas credenciais.');
            }

            const data = await response.json();
            setToken(data.token); // Salva o token no estado
            return true; // Sucesso
        } catch (error) {
            console.error("Erro no login:", error);
            setToken(null); // Garante que não há token em caso de erro
            throw error; // Propaga o erro para o componente de Login tratar
        }
    };

    // Função para fazer logout
    const logout = () => {
        setToken(null);
    };

    // O valor que será compartilhado com os componentes filhos
    const value = { token, login, logout };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Hook customizado para facilitar o uso do contexto
export const useAuth = () => {
    return useContext(AuthContext);
};