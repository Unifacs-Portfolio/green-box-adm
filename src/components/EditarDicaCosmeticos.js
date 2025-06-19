import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Home.css'; // Reutilizando o estilo do formulário
import API_BASE_URL from '../apiConfig';

const EditarDicaCosmeticos = () => {
    const { dicaId } = useParams();
    const navigate = useNavigate();
    const { token } = useAuth();

    const [titulo, setTitulo] = useState('');
    const [conteudo, setConteudo] = useState('');
    const [subtemas, setSubtemas] = useState('');
    
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Efeito para buscar os dados da dica a ser editada
    useEffect(() => {
        const fetchDica = async () => {
            try {
                // Usando a variável de ambiente para a URL base
                const response = await fetch(`${API_BASE_URL}/api/dicas/${dicaId}`);
                if (!response.ok) throw new Error('Dica não encontrada.');
                
                const data = await response.json();
                setTitulo(data.titulo);
                setConteudo(data.conteudo);
                setSubtemas(data.subtemas ? data.subtemas.join(', ') : '');
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchDica();
    }, [dicaId]);

    // LÓGICA DE SUBMISSÃO CORRIGIDA
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        // 1. Criamos um objeto FormData, que é o formato que o backend espera.
        const formData = new FormData();

        // 2. Adicionamos cada campo de texto ao FormData.
        formData.append('titulo', titulo);
        formData.append('conteudo', conteudo);
        formData.append('tema', 'Cosmeticos'); // Tema corrigido para o esperado pela API

        // O backend espera um array, então adicionamos cada subtema individualmente.
        const subtemasArray = subtemas.split(',').map(s => s.trim()).filter(Boolean);
        subtemasArray.forEach(subtema => {
            formData.append('subtemas', subtema);
        });

        try {
            // 3. Enviamos a requisição com o FormData como corpo.
            const response = await fetch(`${API_BASE_URL}/api/dicas/${dicaId}`, {
                method: 'PUT',
                headers: {
                    'Authorization': `Bearer ${token}`
                },
                body: formData // Enviamos o objeto FormData
            });

            if (!response.ok) {
                const errorData = await response.json().catch(() => ({ message: 'Falha ao atualizar a dica.' }));
                throw new Error(errorData.message || 'Falha ao atualizar a dica.');
            }

            alert('Dica de cosméticos atualizada com sucesso!');
            navigate('/cosmeticos/editar'); // Volta para a nova lista de edição

        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    if (loading) return <div className="form-container"><h2>Carregando...</h2></div>;
    if (error) return <div className="form-container"><h2>Erro: {error}</h2></div>;

    return (
        <div className="form-container">
            <h2>Editar Dica de Cosméticos</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Título da Dica:</label>
                    <input 
                        type="text" 
                        value={titulo} 
                        onChange={(e) => setTitulo(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <label>Descrição da Dica de Cosméticos:</label>
                    <textarea 
                        value={conteudo} 
                        onChange={(e) => setConteudo(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <label>Subtemas (separados por vírgula):</label>
                    <input 
                        type="text" 
                        value={subtemas} 
                        onChange={(e) => setSubtemas(e.target.value)} 
                        required 
                    />
                </div>
                <div className="button-container">
                    <button type="submit" disabled={loading}>
                        {loading ? 'Salvando...' : 'Salvar Alterações'}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default EditarDicaCosmeticos;
