import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import './ListaEditar.css'; 
import API_BASE_URL from '../apiConfig';

const ListaEditarCosmeticos = () => {
    const [dicas, setDicas] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    const fetchDicasCosmeticos = useCallback(async () => {
        setLoading(true);
        setError(null);
        
        const tema = encodeURIComponent('Cosmeticos');
        try {
            const response = await fetch(`${API_BASE_URL}/api/${tema}/dicas`);
            if (!response.ok) {
                if (response.status === 404) {
                    throw new Error('Nenhuma dica encontrada para esta categoria.');
                }
                throw new Error('Falha na comunicação com o servidor. Verifique sua conexão.');
            }
            const data = await response.json();
            console.log('Dicas de cosméticos recebidas:', data);
            setDicas(data.dicas);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }, []);


    useEffect(() => {
        fetchDicasCosmeticos();
    }, [fetchDicasCosmeticos]); 

    if (loading) {
        return <div className="list-container"><h2>Carregando dicas de cosméticos...</h2></div>;
    }

  
    if (error) {
        return (
            <div className="list-container">
                <div className="error-container">
                    <h3>Oops! Algo deu errado.</h3>
                    {/* <p>{error}</p> */}
                    <button onClick={fetchDicasCosmeticos} className="retry-button">
                        Tentar Novamente
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="list-container">
            <h2>Editar Dicas de Cosméticos</h2>
            {dicas.length === 0 ? (
                <p>Nenhuma dica de cosméticos foi cadastrada ainda.</p>
            ) : (
                <ul className="items-list">
                    {dicas.map(dica => (
                        <li key={dica.id} className="list-item">
                            <span>{dica.titulo}</span>
                            <Link to={`/editar-dica-cosmeticos/${dica.id}`} className="edit-button">
                                Editar
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default ListaEditarCosmeticos;