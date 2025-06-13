import React, { useState } from 'react';

const InserirIngrediente = () => {
    const [unidade, setUnidade] = useState('colher de chá');
    const [quantidade, setQuantidade] = useState(0);
    const [descricao, setDescricao] = useState('');
    const [mensagemSucesso, setMensagemSucesso] = useState(false); // Estado para controlar a exibição da mensagem de sucesso

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Ingrediente:', { unidade, quantidade, descricao });   
        setMensagemSucesso(true); // Atualiza o estado para exibir a mensagem de sucesso
    };

    return (
        <div className="form-container">
            <h2>Inserir Ingrediente</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Unidade:</label>
                    <select value={unidade} onChange={(e) => setUnidade(e.target.value)}>
                        <option value="colher de chá">Colher de chá</option>
                        <option value="colher de sopa">Colher de sopa</option>
                    </select>
                </div>
                <div>
                    <label>Quantidade:</label>
                    <input
                        type="number"
                        value={quantidade}
                        onChange={(e) => setQuantidade(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Descrição do Ingrediente:</label>
                    <input
                        type="text"
                        value={descricao}
                        onChange={(e) => setDescricao(e.target.value)}
                        required
                    />
                </div>
                <div className="button-container">
                    <button type="submit">OK</button>
                    <button type="button" onClick={() => window.location.reload()}>Inserir Mais Ingredientes</button>
                </div>
            </form>

            {/* Exibe a mensagem de sucesso, se o estado for verdadeiro */}
            {mensagemSucesso && (
                <p style={{ color: 'green', marginTop: '10px' }}>Ingrediente inserido com sucesso!</p>
            )}
            
        </div>
    );
};

export default InserirIngrediente;
