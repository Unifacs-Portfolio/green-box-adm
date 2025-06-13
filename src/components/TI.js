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
            <h1 className="title">TI</h1>
            <div className="button-container">
                <button onClick={() => navigateTo('/cadastrar-dica-ti')}>Cadastrar Dica de TI</button>
                <button onClick={() => navigateTo('/editar-dica-ti')}>Editar Dica de TI</button>
            </div>
        </div>
    );
};

export default Moda;