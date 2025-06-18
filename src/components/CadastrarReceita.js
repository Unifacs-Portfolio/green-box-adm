import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom'; 
import { useAuth } from '../context/AuthContext';
import './Home.css';
import API_BASE_URL from '../apiConfig';

const CadastrarReceita = () => {
    const navigate = useNavigate();
    const location = useLocation(); 
    const { token, user } = useAuth();

    // Estados do formulário
    const [titulo, setTitulo] = useState('');
    const [conteudo, setConteudo] = useState('');
    const [subtemas, setSubtemas] = useState('');
    const [fotos, setFotos] = useState(null);
    const [ingredientes, setIngredientes] = useState([]); 

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (location.state?.updatedData) {
            const { updatedData } = location.state;
            setTitulo(updatedData.titulo || '');
            setConteudo(updatedData.conteudo || '');
            setSubtemas(updatedData.subtemas || '');
            setFotos(updatedData.fotos || null);
            setIngredientes(updatedData.ingredientes || []);
        }
    }, [location.state]);

    const handleNavigateToIngredients = () => {
        const currentData = { titulo, conteudo, subtemas, fotos, ingredientes };
        navigate('/inserir-ingrediente', { state: { currentData } });
    };

    const handleFileChange = (e) => {
        setFotos(e.target.files);
    };

    // LÓGICA DE SUBMISSÃO COMPLETAMENTE REFEITA
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (ingredientes.length === 0) {
            setError('Adicione pelo menos um ingrediente antes de cadastrar a receita.');
            return;
        }

        if (!user) {
            setError('Usuário não autenticado. Faça login novamente.');
            return;
        }

        setLoading(true);
        setError(null);
        
        try {
            // --- PASSO 1: Criar a Receita ---
            const recipeFormData = new FormData();
            recipeFormData.append('titulo', titulo);
            recipeFormData.append('conteudo', conteudo);
            recipeFormData.append('idUsuario', user.id); 
            recipeFormData.append('tema', 'Gastro');    

            const subtemasArray = subtemas.split(',').map(s => s.trim()).filter(Boolean);
            subtemasArray.forEach(subtema => {
                recipeFormData.append('subtemas', subtema);
            });

            // CORRIGIDO: Adiciona fotos no campo 'files'
            if (fotos && fotos.length > 0) {
                for (let i = 0; i < fotos.length; i++) {
                    recipeFormData.append('files', fotos[i]);
                }
            }

            const recipeResponse = await fetch(`${API_BASE_URL}/api/receitas`, { 
                method: 'POST',
                headers: { 'Authorization': `Bearer ${token}` },
                body: recipeFormData, 
            });

            if (!recipeResponse.ok) {
                throw new Error('Falha ao criar a receita principal.');
            }

            const newRecipeData = await recipeResponse.json();
            const newRecipeId = newRecipeData.receita.id; // Pega o ID da receita recém-criada

            // --- PASSO 2: Criar os Ingredientes ---
            // Cria uma "promessa" para cada requisição de ingrediente
            const ingredientPromises = ingredientes.map(ing => {
                return fetch(`${API_BASE_URL}/api/ingredientes`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    },
                    body: JSON.stringify({
                        nomeIngrediente: ing.nome,
                        quantidade: parseFloat(ing.quantidade), // Garante que é um número
                        medida: ing.medida,
                        receitaId: newRecipeId // Associa ao ID da receita criada
                    })
                });
            });

            // Executa todas as promessas em paralelo
            const ingredientResponses = await Promise.all(ingredientPromises);

            // Verifica se alguma das requisições de ingrediente falhou
            const failedRequest = ingredientResponses.find(res => !res.ok);
            if (failedRequest) {
                throw new Error('Falha ao salvar um ou mais ingredientes.');
            }

            // Se tudo correu bem
            alert('Receita e ingredientes cadastrados com sucesso!');
            navigate('/culinaria-gastronomia'); 

        } catch (err) {
            // Se qualquer passo falhar, mostra o erro
            setError(err.message);
        } finally {   
            setLoading(false);
        }
    };

    return (
        <div className="form-container">
            <h2>Cadastrar Nova Receita</h2>
            <form onSubmit={handleSubmit}>
                {/* ... O resto do seu formulário JSX permanece o mesmo ... */}
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

                <div className="ingredient-list-preview">
                    <h4>Ingredientes Adicionados:</h4>
                    {ingredientes.length > 0 ? (
                        <ul>
                            {ingredientes.map((ing, index) => (
                                <li key={index}>{`${ing.quantidade} ${ing.medida} de ${ing.nome}`}</li>
                            ))}
                        </ul>
                    ) : (
                        <p>Nenhum ingrediente adicionado.</p>
                    )}
                </div>

                {error && <p style={{ color: 'red' }}>{error}</p>}

                <div className="button-container">
                    <button type="button" onClick={handleNavigateToIngredients} disabled={loading}>
                        Adicionar/Editar Ingredientes
                    </button>
                    <button type="submit" disabled={loading}>
                        {loading ? 'Cadastrando...' : 'Cadastrar Receita'}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CadastrarReceita;