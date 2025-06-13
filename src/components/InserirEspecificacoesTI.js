import React, { useState } from 'react';

const InserirEspecificacoesTI = () => {
    const [area, setArea] = useState('Inovação e Automação');
    const [mensagemSucesso, setMensagemSucesso] = useState(false); // Estado para controlar a exibição da mensagem de sucesso

    // Função para obter a descrição da área selecionada (exemplo)
    const getDescricao = (selectedArea) => {
        switch (selectedArea) {
            case 'Inovação e Automação':
                return 'Exemplo: Constante evolução de tecnologias e processos automatizados.';
            case 'Segurança da Informação':
                return 'Exemplo: Foco na proteção de dados e redes contra ameaças.';
            case 'Sistemas e Infraestrutura':
                return 'Exemplo: Criação e manutenção de redes, servidores e sistemas.';
            case 'Desenvolvimento de Software':
                return 'Exemplo: Programação e criação de aplicativos.';
            case 'Suporte Técnico':
                return 'Exemplo: Resolução de problemas tecnológicos e assistência aos usuários.';
            case 'Análise de Dados':
                return 'Exemplo: Coleta, processamento e interpretação de dados para gerar insights.';
            default:
                return '';
        }
    };

    // Função para lidar com o envio do formulário
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Especificação TI:', { area });
        setMensagemSucesso(true); // Atualiza o estado para exibir a mensagem de sucesso
    };

    return (
        <div className="form-container">
            <h2>Inserir Especificações TI</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Área:</label>
                    <select value={area} onChange={(e) => setArea(e.target.value)}>
                        <option value="Inovação e Automação">Inovação e Automação</option>
                        <option value="Segurança da Informação">Segurança da Informação</option>
                        <option value="Sistemas e Infraestrutura">Sistemas e Infraestrutura</option>
                        <option value="Desenvolvimento de Software">Desenvolvimento de Software</option>
                        <option value="Suporte Técnico">Suporte Técnico</option>
                        <option value="Análise de Dados">Análise de Dados</option>
                    </select>
                </div>

                {/* Exemplo da descrição exibido abaixo do select */}
                <div style={{ marginTop: '10px', fontStyle: 'italic', color: '#555' }}>
                    {getDescricao(area)}
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

export default InserirEspecificacoesTI;
