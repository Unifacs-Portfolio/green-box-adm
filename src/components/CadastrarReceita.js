import React, { useState, useEffect } from 'react';
// Adicione useLocation para receber dados de volta
import { useNavigate, useLocation } from 'react-router-dom'; 
import { useAuth } from '../context/AuthContext';
import './Home.css';

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

    const handleSubmit = async (e) => {
        e.preventDefault();
        // A lógica de submit aqui permanece a mesma, mas agora ela também
        // precisaria ser adaptada para enviar os ingredientes junto.
        // Por enquanto, vamos focar na navegação.
        alert('Lógica de submit final a ser implementada!');
        console.log({ titulo, conteudo, subtemas, fotos, ingredientes });
    };

    return (
        <div className="form-container">
            <h2>Cadastrar Nova Receita</h2>
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