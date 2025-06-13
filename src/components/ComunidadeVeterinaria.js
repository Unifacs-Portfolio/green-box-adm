import React, { useState } from 'react';
import './Comunidade.css';

const ComunidadeVeterinaria= () => {
  const [tituloDica, setTituloDica] = useState('');

  const handleAprovar = () => {
    alert(`Dica "${tituloDica}" aprovada!`);
  };

  const handleReprovar = () => {
    alert(`Dica "${tituloDica}" reprovada!`);
  };

  return (
    <div className="comunidade-container">
      <h1>Verificar Dicas - Veterinária</h1>
      <div className="form-container">
        <label>Título da Dica:</label>
        <input
          type="text"
          value={tituloDica}
          onChange={(e) => setTituloDica(e.target.value)}
          placeholder="Digite o título da dica"
        />
        <div className="button-container">
          <button className='button' onClick={handleAprovar}>Aprovar</button>
          <button className='button' onClick={handleReprovar}>Reprovar</button>
        </div>
      </div>

      <div className="dicas-verificadas">
        <h2>Dicas Verificadas</h2>
        <p>(Nenhuma dica verificada no momento)</p>
      </div>

    </div>
  );
};

export default ComunidadeVeterinaria;
