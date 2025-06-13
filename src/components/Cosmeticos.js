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
            <h1 className="title">Cosméticos</h1>
            <div className="button-container">
                <button onClick={() => navigateTo('/cadastrar-dica-cosmeticos')}>Cadastrar Dica de Cosmético</button>
                <button onClick={() => navigateTo('/editar-dica-cosmeticos')}>Editar Dica de Cosmético</button>
            </div>
        </div>
    );
};

export default Moda;
