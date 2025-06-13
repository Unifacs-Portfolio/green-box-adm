import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Comunidade.css';

const Comunidade = () => {
  const navigate = useNavigate();

  return (
    <div className="comunidade-container">
      <h1>Comunidade</h1>
      <p>
        Bem-vindo à página da Comunidade! Esta área será utilizada para a verificação das dicas incluídas no portal. Escolha uma categoria abaixo para começar.
      </p>

      <div className="hub-buttons">
        <button className="button" onClick={() => navigate('/comunidade-culinaria')}>Comunidade - Culinária e Gastronomia</button>
        <button className="button" onClick={() => navigate('/comunidade-moda')}>Comunidade - Moda</button>
        <button className="button" onClick={() => navigate('/comunidade-cosmeticos')}>Comunidade - Cosméticos</button>
        <button className="button" onClick={() => navigate('/comunidade-engenharia')}>Comunidade - Engenharia</button>
        <button className="button" onClick={() => navigate('/comunidade-ti')}>Comunidade - TI</button>
        <button className="button" onClick={() => navigate('/comunidade-veterinaria')}>Comunidade - Veterinária</button>
        {/* Adicione mais botões conforme necessário */}
      </div>
    </div>
  );
};

export default Comunidade;
