import React, { useState } from 'react';

const InserirMidia = () => {
    const [link, setLink] = useState('');
    const [descricao, setDescricao] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Link do vídeo:', link);
    };

    return (
        <div className="form-container">
            <h2>Inserir Mídia</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Link do Vídeo:</label>
                    <input
                        type="url"
                        value={link}
                        onChange={(e) => setLink(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Descrição do Vídeo:</label>
                    <textarea 
                        value={descricao} 
                        onChange={(e) => setDescricao(e.target.value)} 
                        required 
                    />
                </div>
                <button type="submit">Upload</button>
            </form>
        </div>
    );
};

export default InserirMidia;
