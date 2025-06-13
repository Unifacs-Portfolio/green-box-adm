import React, { useState } from 'react';

const InserirEspecificacoesCosmeticos = () => {
    const [ingredientesAtivos, setIngredientesAtivos] = useState('');
    const [hipoalergenicidade, setHipoalergenicidade] = useState('Não');
    const [texturaAplicacao, setTexturaAplicacao] = useState('');
    const [propriedadesSensoriais, setPropriedadesSensoriais] = useState('');
    const [funcaoEspecifica, setFuncaoEspecifica] = useState('');
    const [conformidadeRegulamentos, setConformidadeRegulamentos] = useState('');
    const [mensagemSucesso, setMensagemSucesso] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Especificações Cosméticos:', { 
            ingredientesAtivos, 
            hipoalergenicidade, 
            texturaAplicacao, 
            propriedadesSensoriais, 
            funcaoEspecifica, 
            conformidadeRegulamentos 
        });
        setMensagemSucesso(true); // Atualiza o estado para exibir a mensagem de sucesso
    };

    return (
        <div className="form-container">
            <h2>Inserir Especificações de Cosméticos</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Ingredientes Ativos:</label>
                    <input
                        type="text"
                        value={ingredientesAtivos}
                        onChange={(e) => setIngredientesAtivos(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Hipoalergenicidade:</label>
                    <select value={hipoalergenicidade} onChange={(e) => setHipoalergenicidade(e.target.value)}>
                        <option value="Sim">Sim</option>
                        <option value="Não">Não</option>
                    </select>
                </div>
                <div>
                    <label>Textura e Aplicação:</label>
                    <input
                        type="text"
                        value={texturaAplicacao}
                        onChange={(e) => setTexturaAplicacao(e.target.value)}
                        placeholder="Creme, gel, pó, líquido, etc."
                        required
                    />
                </div>
                <div>
                    <label>Propriedades Sensoriais:</label>
                    <input
                        type="text"
                        value={propriedadesSensoriais}
                        onChange={(e) => setPropriedadesSensoriais(e.target.value)}
                        placeholder="Fragrância, absorção rápida, etc."
                        required
                    />
                </div>
                <div>
                    <label>Função Específica:</label>
                    <input
                        type="text"
                        value={funcaoEspecifica}
                        onChange={(e) => setFuncaoEspecifica(e.target.value)}
                        placeholder="Hidratante, protetor solar, etc."
                        required
                    />
                </div>
                <div>
                    <label>Conformidade com Regulamentos:</label>
                    <input
                        type="text"
                        value={conformidadeRegulamentos}
                        onChange={(e) => setConformidadeRegulamentos(e.target.value)}
                        placeholder="Testes dermatológicos, padrões de segurança"
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
                <p style={{ color: 'green', marginTop: '10px' }}>Especificações de Cosméticos inseridas com sucesso!</p>
            )}
        </div>
    );
};

export default InserirEspecificacoesCosmeticos;
