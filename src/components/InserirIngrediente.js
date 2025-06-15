import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Home.css';

const InserirIngrediente = () => {
    const location = useLocation();
    const navigate = useNavigate();

    // 1. Pega os dados da receita que foram passados pela navegação
    const [recipeData, setRecipeData] = useState(location.state?.currentData || {});
    // 2. O estado dos ingredientes é inicializado com o que veio da página anterior
    const [ingredientes, setIngredientes] = useState(recipeData.ingredientes || []);
    
    // Estados para o formulário de um novo ingrediente
    const [nome, setNome] = useState('');
    const [quantidade, setQuantidade] = useState('');
    const [medida, setMedida] = useState('');

    const handleAddIngrediente = (e) => {
        e.preventDefault();
        if (!nome || !quantidade || !medida) {
            alert('Preencha todos os campos do ingrediente.');
            return;
        }
        const novoIngrediente = { nome, quantidade, medida };
        setIngredientes([...ingredientes, novoIngrediente]);
        // Limpa os campos do formulário
        setNome('');
        setQuantidade('');
        setMedida('');
    };

    const handleRemoveIngrediente = (indexToRemove) => {
        setIngredientes(ingredientes.filter((_, index) => index !== indexToRemove));
    };

    const handleConfirmar = () => {
        const updatedData = { ...recipeData, ingredientes };
        navigate('/cadastrar-receita', { state: { updatedData } });
    };

    return (
        <div className="form-container">
            <h2>Adicionar Ingredientes</h2>
            
            {/* Formulário para adicionar um novo ingrediente */}
            <form onSubmit={handleAddIngrediente} className="ingredient-form">
                <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Nome do ingrediente" />
                <input type="text" value={quantidade} onChange={(e) => setQuantidade(e.target.value)} placeholder="Quantidade" />
                <input type="text" value={medida} onChange={(e) => setMedida(e.target.value)} placeholder="Medida (ex: xícaras, colheres)" />
                <button type="submit">Adicionar</button>
            </form>

            {/* Lista de ingredientes já adicionados */}
            <div className="ingredient-list">
                <h3>Lista de Ingredientes</h3>
                {ingredientes.length > 0 ? (
                    <ul>
                        {ingredientes.map((ing, index) => (
                            <li key={index}>
                                <span>{`${ing.quantidade} ${ing.medida} de ${ing.nome}`}</span>
                                <button onClick={() => handleRemoveIngrediente(index)} className="remove-button">Remover</button>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>Nenhum ingrediente adicionado ainda.</p>
                )}
            </div>

            <div className="button-container">
                <button type="button" onClick={handleConfirmar} className="confirm-button">Confirmar Ingredientes</button>
            </div>
        </div>
    );
};

export default InserirIngrediente;