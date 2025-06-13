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
            <h1 className="title">Engenharia</h1>
            <div className="button-container">
                <button onClick={() => navigateTo('/cadastrar-dica-Engenharia')}>Cadastrar Dica de Engenharia</button>
                <button onClick={() => navigateTo('/editar-dica-engenharia')}>Editar Dica de Engenharia</button>
            </div>
        </div>
    );
};

export default Moda;
