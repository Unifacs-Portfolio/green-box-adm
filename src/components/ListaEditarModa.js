import React, { useState, useEffect, useCallback } from 'react'; 
import { Link } from 'react-router-dom';
import './ListaEditar.css'; 
import API_BASE_URL from '../apiConfig';

const ListaEditarModa = () => {
    const [dicas, setDicas] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchDicasModa = useCallback(async () => {
        setLoading(true); 
        setError(null);   
        try {
            const response = await fetch(`${API_BASE_URL}/api/Moda/dicas`);
            if (!response.ok) {
    
                if (response.status === 404) {
                    throw new Error('Nenhuma dica encontrada para esta categoria.');
                }
                throw new Error('Falha na comunicação com o servidor. Verifique sua conexão.');
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
        fetchDicasModa();
    }, [fetchDicasModa]); 

    if (loading) {
        return <div className="list-container"><h2>Carregando dicas de moda...</h2></div>;
    }


    if (error) {
        return (
            <div className="list-container">
                <div className="error-container">
                    <h3>Oops! Algo deu errado.</h3>
                    {/* <p>{error}</p> */}
                    <button onClick={fetchDicasModa} className="retry-button">
                        Tentar Novamente
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="list-container">
            <h2>Editar Dicas de Moda</h2>
            {dicas.length === 0 ? (
                <p>Nenhuma dica de moda foi cadastrada ainda.</p>
            ) : (
                <ul className="items-list">
                    {dicas.map(dica => (
                        <li key={dica.id} className="list-item">
                            <span>{dica.titulo}</span>
                            <Link to={`/editar-dica-moda/${dica.id}`} className="edit-button">
                                Editar
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default ListaEditarModa;