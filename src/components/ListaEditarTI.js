import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import './ListaEditar.css'; // Reutilizando o CSS
import API_BASE_URL from '../apiConfig';

const ListaEditarTI = () => {
    const [dicas, setDicas] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchDicasTI = useCallback(async () => {
        setLoading(true);
        setError(null);

        const tema = encodeURIComponent('TI'); // Tema para esta página
        try {
            const response = await fetch(`${API_BASE_URL}/api/${tema}/dicas`);
            if (!response.ok) {
                throw new Error('Não foi possível carregar as dicas de TI.');
            }
            const data = await response.json();
            setDicas(data.dicas);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchDicasTI();
    }, [fetchDicasTI]); 

    if (loading) {
        return <div className="list-container"><h2>Carregando dicas de TI...</h2></div>;
    }

    if (error) {
        return (
            <div className="list-container">
                <div className="error-container">
                    <h3>Oops! Algo deu errado.</h3>
                    {/* <p>{error}</p> */}
                    <button onClick={fetchDicasTI} className="retry-button">
                        Tentar Novamente
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="list-container">
            <h2>Editar Dicas de TI</h2>
            {dicas.length === 0 ? (
                <p>Nenhuma dica de TI encontrada.</p>
            ) : (
                <ul className="items-list">
                    {dicas.map(dica => (
                        <li key={dica.id} className="list-item">
                            <span>{dica.titulo}</span>
                            <Link to={`/editar-dica-ti/${dica.id}`} className="edit-button">
                                Editar
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default ListaEditarTI;