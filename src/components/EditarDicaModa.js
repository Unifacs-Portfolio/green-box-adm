import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Home.css'; 
import API_BASE_URL from '../apiConfig';

const EditarDicaModa = () => {
    // Hooks para pegar parâmetros da URL, navegar e usar autenticação
    const { dicaId } = useParams(); // Pega o ":dicaId" da URL
    const navigate = useNavigate();
    const { token } = useAuth();

    // Estados do formulário
    const [titulo, setTitulo] = useState('');
    const [conteudo, setConteudo] = useState('');
    const [subtemas, setSubtemas] = useState('');
    
    // Estados de controle
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Efeito para buscar os dados da dica quando a página carrega
    useEffect(() => {
        const fetchDica = async () => {
            try {
                const response = await fetch(`${API_BASE_URL}/api/dicas/${dicaId}`);
                if (!response.ok) {
                    throw new Error('Dica não encontrada.');
                }
                const data = await response.json();
                // Preenche o formulário com os dados da API
                setTitulo(data.titulo);
                setConteudo(data.conteudo);
                setSubtemas(data.subtemas.join(', ')); // Converte o array de subtemas em texto
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchDica();
    }, [dicaId]); // Roda sempre que o dicaId mudar

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        const dadosAtualizados = {
            titulo,
            conteudo,
            tema: 'Moda', // O tema não muda
            subtemas: subtemas.split(',').map(s => s.trim()).filter(Boolean),
        };

        try {
            const response = await fetch(`http://localhost:3000/api/dicas/${dicaId}`, {
                method: 'PUT', // Uso PUT para atualizar
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}` // Autenticação é necessária para editar
                },
                body: JSON.stringify(dadosAtualizados)
            });

            if (!response.ok) {
                throw new Error('Falha ao atualizar a dica.');
            }

            alert('Dica atualizada com sucesso!');
            navigate('/moda/editar'); // Volta para a lista de edição

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
            <h2>Editar Dica de Moda</h2>
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
                    <label>Descrição da Dica de Moda:</label>
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

export default EditarDicaModa;