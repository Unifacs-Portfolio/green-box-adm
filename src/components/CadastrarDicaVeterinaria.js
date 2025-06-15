import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; // Importa o hook de autenticação
import './Home.css'; // Reutilizando o estilo dos formulários

const CadastrarDicaVeterinaria = () => {
    // Estados do formulário
    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [subtemas, setSubtemas] = useState('');

    // Estados de controle para feedback
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const navigate = useNavigate();
    const { token, user } = useAuth(); // Pega token e usuário logado

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        if (!token || !user) {
            setError("Você precisa estar logado para cadastrar uma dica.");
            setLoading(false);
            return;
        }
        
        // Prepara o objeto de dados para enviar à API
        const dadosParaApi = {
            titulo: nome,
            conteudo: descricao,
            email: user.email,
            tema: 'Veterinária', // Tema fixo para esta página
            subtemas: subtemas.split(',').map(s => s.trim()).filter(Boolean),
        };

        try {
            // A chamada é para o mesmo endpoint de criação de dicas
            const response = await fetch('http://localhost:3000/api/dicas', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}` // Envia o token para autenticação
                },
                body: JSON.stringify(dadosParaApi)
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Falha ao cadastrar a dica.');
            }

            alert('Dica de vetetinária cadastrada com sucesso!');
            navigate('/veterinaria'); // Redireciona para a página principal de culinária

        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="form-container">
            <h2>Cadastrar Dica de Veterinária</h2>
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
                    <label>Descrição da Dica de Veterinária:</label>
                    <textarea 
                        value={descricao} 
                        onChange={(e) => setDescricao(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <label>Subtemas (separados por vírgula):</label>
                    <input 
                        type="text" 
                        value={subtemas} 
                        onChange={(e) => setSubtemas(e.target.value)} 
                        placeholder="Ex: Técnicas, Manipulação de Remédios"
                        required 
                    />
                </div>

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

export default CadastrarDicaVeterinaria;