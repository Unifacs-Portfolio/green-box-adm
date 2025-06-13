import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const CadastrarDicaCulinaria = () => {
    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Dica:', { nome, descricao });
        // Enviar os dados para uma API ou manipular de outra forma
    };

    return (
        <div className="form-container">
            <h2>Cadastrar Dica de Culinária</h2>
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
                    <label>Descrição da Dica de Culinária:</label>
                    <textarea 
                        value={descricao} 
                        onChange={(e) => setDescricao(e.target.value)} 
                        required 
                    />
                </div>
                <div className="button-container">
                    <button type="button" onClick={() => navigate('/inserir-especificacoes-culinaria')}>Inserir Especificações</button>
                    <button type="button" onClick={() => navigate('/inserir-midia')}>Inserir Mídia</button>
                    <button type="submit">Cadastrar</button>
                </div>
            </form>
        </div>
    );
};

export default CadastrarDicaCulinaria;
