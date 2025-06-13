import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Moda = () => {
    const navigate = useNavigate();

    const navigateTo = (path) => {
        navigate(path);
    };

    return (
        <div className="home-container">
            <h1 className="title">Moda</h1>
            <div className="button-container">
                <button onClick={() => navigateTo('/cadastrar-dica-moda')}>Cadastrar Dica de Moda</button>
                <button onClick={() => navigateTo('/editar-dica-moda')}>Editar Dica de Moda</button>
            </div>
        </div>
    );
};

export default Moda;
