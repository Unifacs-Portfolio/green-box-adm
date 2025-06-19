import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; // 1. Importar o hook de autenticação
import './Home.css';
import API_BASE_URL from '../apiConfig';

const CadastrarDicaModa = () => {
    // Estados do formulário
    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [subtemas, setSubtemas] = useState(''); // 2. Novo estado para subtemas

    // Estados de controle
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const navigate = useNavigate();
    const { token, user } = useAuth(); // 3. Pegar token e dados do usuário do contexto

    console.log(token); // Log para depuração
console.log(user); // Log para depuração
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        // Verifica se o usuário está logado
        if (!token || !user) {
            setError("Você precisa estar logado para cadastrar uma dica.");
            setLoading(false);
            return;
        }
        
        // 4. Preparar os dados para a API
        const dadosParaApi = {
            titulo: nome,
            conteudo: descricao,
            email: user.email, // Usa o e-mail do usuário logado
            tema: 'Moda',      // Tema fixo para esta página
            subtemas: subtemas.split(',').map(s => s.trim()).filter(Boolean), // Converte a string "a, b, c" para o array ["a", "b", "c"]
        };

        try {
            // 5. Fazer a chamada para a API
            const response = await fetch(`${API_BASE_URL}/api/dicas`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}` // Envia o token de autenticação
                },
                body: JSON.stringify(dadosParaApi)
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Falha ao cadastrar a dica.');
            }

            // Sucesso!
            alert('Dica de moda cadastrada com sucesso!');
            navigate('/moda'); // Navega para a página de moda após o sucesso

        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="form-container">
            <h2>Cadastrar Dica de Moda</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Título da Dica:</label>
                    <input 
                        type="text" 
                        value={nome} 
                        onChange={(e) => setNome(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <label>Descrição da Dica de Moda:</label>
                    <textarea 
                        value={descricao} 
                        onChange={(e) => setDescricao(e.target.value)} 
                        required 
                    />
                </div>
                {/* 6. Novo campo para subtemas no formulário */}
                <div>
                    <label>Subtemas (separados por vírgula):</label>
                    <input 
                        type="text" 
                        value={subtemas} 
                        onChange={(e) => setSubtemas(e.target.value)} 
                        placeholder="Ex: Bazar, Roupas usadas, etc.."
                        required 
                    />
                </div>

                {/* Mostra mensagens de erro, se houver */}
                {error && <p style={{ color: 'red' }}>{error}</p>}

                <div className="button-container">
                    <button type="submit" disabled={loading}>
                        {loading ? 'Cadastrando...' : 'Cadastrar'}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CadastrarDicaModa;