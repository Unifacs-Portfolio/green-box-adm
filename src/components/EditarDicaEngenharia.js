import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Home.css'; // Reutilizando o estilo do formulário

const EditarDicaEngenharia = () => {
    const { dicaId } = useParams();
    const navigate = useNavigate();
    const { token } = useAuth();

    const [titulo, setTitulo] = useState('');
    const [conteudo, setConteudo] = useState('');
    const [subtemas, setSubtemas] = useState('');
    
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchDica = async () => {
            try {
                const response = await fetch(`http://localhost:3000/api/dicas/${dicaId}`);
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        const dadosAtualizados = {
            titulo,
            conteudo,
            tema: 'Engenharia', // <-- Tema fixo para esta página
            subtemas: subtemas.split(',').map(s => s.trim()).filter(Boolean),
        };

        try {
            const response = await fetch(`http://localhost:3000/api/dicas/${dicaId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(dadosAtualizados)
            });

            if (!response.ok) throw new Error('Falha ao atualizar a dica.');

            alert('Dica de engenharia atualizada com sucesso!');
            navigate('/engenharia/editar'); // <-- Volta para a nova lista de edição

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
            <h2>Editar Dica de Engenharia</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Título da Dica:</label>
                    <input type="text" value={titulo} onChange={(e) => setTitulo(e.target.value)} required />
                </div>
                <div>
                    <label>Descrição da Dica:</label>
                    <textarea value={conteudo} onChange={(e) => setConteudo(e.target.value)} required />
                </div>
                <div>
                    <label>Subtemas (separados por vírgula):</label>
                    <input type="text" value={subtemas} onChange={(e) => setSubtemas(e.target.value)} required />
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

export default EditarDicaEngenharia;