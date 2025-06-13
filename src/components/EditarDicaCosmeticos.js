import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const EditarDicaOuReceitaCulinaria = () => {
    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Dica:', { nome, descricao });
        // Enviar os dados para uma API ou manipular de outra forma
    };

    return (
        <div className="form-container">
            <h2>Edição Cosméticos</h2>
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
                <div className="button-container">
                    <button type="submit">Editar</button>
                </div>
            </form>
        </div>
    );
};

export default EditarDicaOuReceitaCulinaria;
