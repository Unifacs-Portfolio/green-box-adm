import React, { useState } from 'react';

const InserirEspecificacoesEngenharia = () => {
    const [engenharia, setEngenharia] = useState('Computação');
    const [conteudo, setConteudo] = useState('');
    const [mensagemSucesso, setMensagemSucesso] = useState(false); // Estado para controlar a exibição da mensagem de sucesso

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Especificações Engenharia:', { engenharia, conteudo });
        setMensagemSucesso(true); // Atualiza o estado para exibir a mensagem de sucesso
    };

    return (
        <div className="form-container">
            <h2>Inserir Especificações de Engenharia</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Engenharia:</label>
                    <select value={engenharia} onChange={(e) => setEngenharia(e.target.value)}>
                        <option value="Computação">Computação</option>
                        <option value="Elétrica">Elétrica</option>
                        <option value="Civil">Civil</option>
                        <option value="Mecânica">Mecânica</option>
                        <option value="Produção">Produção</option>
                        <option value="Química">Química</option>
                        <option value="Outros">Outros</option>
                    </select>
                </div>
                <div>
                    <label>Conteúdo:</label>
                    <input
                        type="text"
                        value={conteudo}
                        onChange={(e) => setConteudo(e.target.value)}
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
                <p style={{ color: 'green', marginTop: '10px' }}>Especificações de Engenharia inseridas com sucesso!</p>
            )}
        </div>
    );
};

export default InserirEspecificacoesEngenharia;
