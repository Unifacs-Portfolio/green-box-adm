import React, { useState } from 'react';

const InserirEspecificacoesModa = () => {
    const [cor, setCor] = useState('');
    const [tecido, setTecido] = useState('');
    const [medidas, setMedidas] = useState('');
    const [mensagemSucesso, setMensagemSucesso] = useState(false); // Estado para controlar a exibição da mensagem de sucesso

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Especificações:', { cor, tecido, medidas });
        setMensagemSucesso(true); // Atualiza o estado para exibir a mensagem de sucesso
    };

    return (
        <div className="form-container">
            <h2>Inserir Especificações</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Cor:</label>
                    <input
                        type="text"
                        value={cor}
                        onChange={(e) => setCor(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Tecido:</label>
                    <input
                        type="text"
                        value={tecido}
                        onChange={(e) => setTecido(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Medidas:</label>
                    <input
                        type="text"
                        value={medidas}
                        onChange={(e) => setMedidas(e.target.value)}
                        required
                    />
                </div>
                <div className="button-container">
                    <button type="submit">OK</button>
                    <button type="button" onClick={() => window.location.reload()}>Inserir Mais Especificações</button>
                </div>
            </form>

            {/* Exibe a mensagem de sucesso, se o estado for verdadeiro */}
            {mensagemSucesso && (
                <p style={{ color: 'green', marginTop: '10px' }}>Especificações inseridas com sucesso!</p>
            )}
        </div>
    );
};

export default InserirEspecificacoesModa;
