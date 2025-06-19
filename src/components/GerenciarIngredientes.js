import React, { useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import API_BASE_URL from '../apiConfig';
import './Home.css'; // Reutilizando estilos

const GerenciarIngredientes = () => {
    const { receitaId } = useParams(); // Pega o ID da receita da URL
    const navigate = useNavigate();
    const { token } = useAuth();

    const [ingredientesAtuais, setIngredientesAtuais] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Estados para o formulário de adicionar novo ingrediente
    const [nome, setNome] = useState('');
    const [quantidade, setQuantidade] = useState('');
    const [medida, setMedida] = useState('');

    // Função para buscar os ingredientes já associados a esta receita
    const fetchIngredientes = useCallback(async () => {
        setLoading(true);
   
        try {
            const response = await fetch(`${API_BASE_URL}/api/receitas/${receitaId}/ingredientes`, {
                headers: { 'Authorization': `Bearer ${token}` }
            });
            if (!response.ok) throw new Error('Falha ao carregar ingredientes.');
            const data = await response.json();
            setIngredientesAtuais(data.ingredientes || []);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }, [receitaId, token]);

    useEffect(() => {
        fetchIngredientes();
    }, [fetchIngredientes]);

    const handleAddIngrediente = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${API_BASE_URL}/api/ingredientes`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({
                    nomeIngrediente: nome,
                    quantidade: parseFloat(quantidade),
                    medida: medida,
                    receitaId: receitaId
                })
            });
            if (!response.ok) throw new Error('Falha ao adicionar ingrediente.');
            
            // Limpa o formulário e recarrega a lista
            setNome('');
            setQuantidade('');
            setMedida('');
            fetchIngredientes();
        } catch (err) {
            setError(err.message);
        }
    };
    
    const handleRemoveIngrediente = async (ingredienteId) => {
        if (window.confirm('Tem certeza que deseja remover este ingrediente?')) {
            try {
                const response = await fetch(`${API_BASE_URL}/api/ingredientes/${ingredienteId}`, {
                    method: 'DELETE',
                    headers: { 'Authorization': `Bearer ${token}` }
                });
                if (!response.ok) throw new Error('Falha ao remover ingrediente.');
                fetchIngredientes(); // Recarrega a lista
            } catch (err) {
                setError(err.message);
            }
        }
    };

    return (
        <div className="form-container">
            <h2>Gerenciar Ingredientes da Receita (Passo 2 de 2)</h2>
            
            {/* Formulário para adicionar um novo ingrediente */}
            <form onSubmit={handleAddIngrediente} className="ingredient-form">
                <h4>Adicionar Novo Ingrediente</h4>
                <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Nome" required />
                <input type="number" value={quantidade} onChange={(e) => setQuantidade(e.target.value)} placeholder="Qtd." required />
                <input type="text" value={medida} onChange={(e) => setMedida(e.target.value)} placeholder="Medida (ex: xícaras)" required />
                <button type="submit">Adicionar</button>
            </form>

            <hr />

            {/* Lista de ingredientes já adicionados */}
            <div className="ingredient-list">
                <h3>Ingredientes na Receita</h3>
                {loading && <p>Carregando...</p>}
                {error && <p style={{color: 'red'}}>{error}</p>}
                {ingredientesAtuais.length > 0 ? (
                    <ul>
                        {ingredientesAtuais.map((ing) => (
                            <li key={ing.id}>
                                <span>{`${ing.quantidade} ${ing.medida} de ${ing.nome}`}</span>
                                <button onClick={() => handleRemoveIngrediente(ing.id)} className="remove-button">Remover</button>
                            </li>
                        ))}
                    </ul>
                ) : (
                    !loading && <p>Nenhum ingrediente adicionado ainda.</p>
                )}
            </div>

            <div className="button-container">
                <button type="button" onClick={() => navigate('/culinaria-gastronomia')} className="confirm-button">Finalizar e Voltar</button>
            </div>
        </div>
    );
};

export default GerenciarIngredientes;