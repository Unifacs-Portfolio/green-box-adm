import React, { useState } from 'react';

const InserirEspecificacoesVeterinaria = () => {
    const [composicaoAtiva, setComposicaoAtiva] = useState('');
    const [indicacoesUso, setIndicacoesUso] = useState('');
    const [dosagem, setDosagem] = useState('');
    const [viaAdministracao, setViaAdministracao] = useState('');
    const [contraindicacoes, setContraindicacoes] = useState('');
    const [efeitosColaterais, setEfeitosColaterais] = useState('');
    const [armazenamento, setArmazenamento] = useState('');
    const [mensagemSucesso, setMensagemSucesso] = useState(false); // Estado para controlar a exibição da mensagem de sucesso

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Especificações Veterinária:', { 
            composicaoAtiva, 
            indicacoesUso, 
            dosagem, 
            viaAdministracao, 
            contraindicacoes, 
            efeitosColaterais, 
            armazenamento 
        });
        setMensagemSucesso(true); // Atualiza o estado para exibir a mensagem de sucesso
    };

    return (
        <div className="form-container">
            <h2>Inserir Especificações Veterinária</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Composição Ativa:</label>
                    <input
                        type="text"
                        value={composicaoAtiva}
                        onChange={(e) => setComposicaoAtiva(e.target.value)}
                        placeholder="Exemplo: Sulfato de Neomicina"
                        required
                    />
                </div>

                <div>
                    <label>Indicações de Uso:</label>
                    <textarea
                        value={indicacoesUso}
                        onChange={(e) => setIndicacoesUso(e.target.value)}
                        placeholder="Exemplo: Tratamento de infecções bacterianas"
                        required
                    />
                </div>

                <div>
                    <label>Dosagem:</label>
                    <input
                        type="text"
                        value={dosagem}
                        onChange={(e) => setDosagem(e.target.value)}
                        placeholder="Exemplo: 10mg por kg de peso corporal"
                        required
                    />
                </div>

                <div>
                    <label>Via de Administração:</label>
                    <input
                        type="text"
                        value={viaAdministracao}
                        onChange={(e) => setViaAdministracao(e.target.value)}
                        placeholder="Exemplo: Oral, Injetável"
                        required
                    />
                </div>

                <div>
                    <label>Contraindicações:</label>
                    <textarea
                        value={contraindicacoes}
                        onChange={(e) => setContraindicacoes(e.target.value)}
                        placeholder="Exemplo: Não recomendado para animais com hipersensibilidade a sulfonamidas"
                        required
                    />
                </div>

                <div>
                    <label>Efeitos Colaterais:</label>
                    <textarea
                        value={efeitosColaterais}
                        onChange={(e) => setEfeitosColaterais(e.target.value)}
                        placeholder="Exemplo: Náusea, perda de apetite"
                        required
                    />
                </div>

                <div>
                    <label>Armazenamento:</label>
                    <input
                        type="text"
                        value={armazenamento}
                        onChange={(e) => setArmazenamento(e.target.value)}
                        placeholder="Exemplo: Armazenar em local fresco e seco"
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

export default InserirEspecificacoesVeterinaria;
