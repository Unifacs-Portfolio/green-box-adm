import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './BackButton.css';

const BackButton = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleBack = () => {
        navigate(-1);
    };

    if (location.pathname === '/') {
        return null;
    }

    return (
        <button onClick={handleBack} className="back-button">
            &#x2190; Voltar
        </button>
    );
};

export default BackButton;