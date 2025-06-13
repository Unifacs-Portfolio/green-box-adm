import React, { useState } from 'react';

const InserirEspecificacoesCulinaria = () => {
    const [ingredientes, setIngredientes] = useState('');
    const [passoAPasso, setPassoAPasso] = useState('');
    const [tempoPreparo, setTempoPreparo] = useState('');
    const [equipamentos, setEquipamentos] = useState('');
    const [mensagemSucesso, setMensagemSucesso] = useState(false); // Estado para controlar a exibição da mensagem de sucesso

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Especificações Culinária:', { 
            ingredientes, 
            passoAPasso, 
            tempoPreparo, 
            equipamentos 
        });
        setMensagemSucesso(true); // Atualiza o estado para exibir a mensagem de sucesso
    };

    return (
        <div className="form-container">
            <h2>Inserir Especificações Culinária</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Ingredientes Necessários:</label>
                    <textarea
                        value={ingredientes}
                        onChange={(e) => setIngredientes(e.target.value)}
                        placeholder="Exemplo: 2 tomates, 1 cebola, azeite de oliva."
                        required
                    />
                </div>

                <div>
                    <label>Passo a Passo:</label>
                    <textarea
                        value={passoAPasso}
                        onChange={(e) => setPassoAPasso(e.target.value)}
                        placeholder="Exemplo: Primeiro, pique os tomates e a cebola..."
                        required
                    />
                </div>

                <div>
                    <label>Tempo de Preparação:</label>
                    <input
                        type="text"
                        value={tempoPreparo}
                        onChange={(e) => setTempoPreparo(e.target.value)}
                        placeholder="Exemplo: 15 minutos"
                        required
                    />
                </div>

                <div>
                    <label>Equipamentos Necessários:</label>
                    <textarea
                        value={equipamentos}
                        onChange={(e) => setEquipamentos(e.target.value)}
                        placeholder="Exemplo: Liquidificador, panela de ferro."
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
                <p style={{ color: 'green', marginTop: '10px' }}>Especificação inserida com sucesso!</p>
            )}
        </div>
    );
};

export default InserirEspecificacoesCulinaria;
