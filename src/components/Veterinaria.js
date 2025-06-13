import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Veterinaria = () => {
    const navigate = useNavigate();

    const navigateTo = (path) => {
        navigate(path);
    };

    return (
        <div className="home-container">
            <h1 className="title">Veterinária</h1>
            <div className="button-container">
                <button onClick={() => navigateTo('/cadastrar-dica-veterinaria')}>Cadastrar Dica de Veterinária</button>
                <button onClick={() => navigateTo('/editar-dica-veterinaria')}>Editar Dica de Veterinária</button>
            </div>
        </div>
    );
};

export default Veterinaria;