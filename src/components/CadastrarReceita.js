import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Home.css';
import API_BASE_URL from '../apiConfig';

const CadastrarReceita = () => {
    const navigate = useNavigate();
    const { token, user } = useAuth();

    const [titulo, setTitulo] = useState('');
    const [conteudo, setConteudo] = useState('');
    const [subtemas, setSubtemas] = useState('');
    const [fotos, setFotos] = useState(null);

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleFileChange = (e) => {
        setFotos(e.target.files);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Validação para o usuário logado
        if (!user || !user.email) {
            setError('Usuário não autenticado ou e-mail não encontrado. Faça login novamente.');
            return;
        }

        // --- VALIDAÇÃO ADICIONADA ---
        // Verifica se o campo subtemas não está vazio antes de prosseguir.
        const subtemasArray = subtemas.split(',').map(s => s.trim()).filter(Boolean);
        if (subtemasArray.length === 0) {
            setError('É necessário adicionar pelo menos um subtema.');
            return; // Impede o envio da requisição se não houver subtemas
        }
        // --- FIM DA VALIDAÇÃO ---

        setLoading(true);
        setError(null);
        
        try {
            const formData = new FormData();
            
            // Adicionando os campos de texto ao FormData
            formData.append('titulo', titulo);
            formData.append('conteudo', conteudo);
            formData.append('tema', 'Culinaria');
            formData.append('idUsuario', user.email);

            // Adiciona os subtemas ao FormData
            subtemasArray.forEach(subtema => {
                formData.append('subtemas', subtema);
            });

            // Adiciona os arquivos no campo 'files'
            if (fotos && fotos.length > 0) {
                for (let i = 0; i < fotos.length; i++) {
                    formData.append('files', fotos[i]);
                }
            }

            const response = await fetch(`${API_BASE_URL}/api/receitas`, { 
                method: 'POST',
                headers: { 
                    'Authorization': `Bearer ${token}`
                },
                body: formData, 
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Falha ao criar a receita.');
            }

            const newRecipeData = await response.json();
            const newRecipeId = newRecipeData.receita.id;

            alert('Receita criada! Agora, adicione os ingredientes.');
            navigate(`/receita/${newRecipeId}/ingredientes`); 

        } catch (err) {
            setError(err.message);
        } finally { 
            setLoading(false);
        }
    };

    return (
        <div className="form-container">
            <h2>Cadastrar Nova Receita (Passo 1 de 2)</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Título da Receita:</label>
                    <input type="text" value={titulo} onChange={(e) => setTitulo(e.target.value)} required />
                </div>
                <div>
                    <label>Modo de Preparo / Conteúdo:</label>
                    <textarea value={conteudo} onChange={(e) => setConteudo(e.target.value)} required />
                </div>
                <div>
                    <label>Subtemas (separados por vírgula):</label>
                    <input type="text" value={subtemas} onChange={(e) => setSubtemas(e.target.value)} placeholder="Ex: Vegano, Aproveitamento Integral" required />
                </div>
                <div>
                    <label>Fotos da Receita:</label>
                    <input type="file" multiple accept="image/*" onChange={handleFileChange} />
                </div>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <div className="button-container">
                    <button type="submit" disabled={loading}>
                        {loading ? 'Salvando...' : 'Salvar e Adicionar Ingredientes'}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CadastrarReceita;
