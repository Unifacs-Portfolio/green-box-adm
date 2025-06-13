// O componente Home é uma página principal que exibe o título ("Portal de Conteúdos") e alguns botões para redirecionar a outras páginas.
// A função useNavigate permite redirecionar o usuário de maneira programática, sem a necessidade de links <a> tradicionais.
// Em resumo o Home centraliza a navegação entre as páginas, funcionando como um "hub".

// src/components/Home.js
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importa a função useNavigate do reat-router-dom para a navegação programática entre rotas. Ou seja, redireciona o usuário para uma rota específica dentro do aplicativo sem que ele precisa clicar em um link, apenas usando uma função.
import './Home.css'; // Importa o arquivo CSS específico para esse componente.

const Home = () => {
    // Inicializa o hook useNavigate, permitindo navegar programaticamente.
    const navigate = useNavigate(); // Ao chamar essa função, podemos redirecionar o usuário para diferentes rotas.

    // navigateTo(path) é a função que recebe o path(caminho) como parâmetro e usa a função navigate para redirecionar o usuário para esse caminho. Por exemplo. se navigateTo('/cadastar-receita') for chamado, o usuário será redirecionado para a rota /cadastar-receita
    const navigateTo = (path) => {
        navigate(path);
    };

    return (
        // <div className="home-container"> um contêiner div com a classe CSS home-container, isso permite que os estilos definidos em Home.css sejam aplicados. Mesma ideia para <h1 className="title">Culinária e Gastronomia</h1> e <div className="button-container">.
        // <button onClick={() => navigateTo('/culinaria-gastronomia')}>Culinária e Gastronomia</button> um botão que ao ser clicado chama a função navigateTo com a rota /culinaria-gastronomia, redirecionando o usuário para essa rota.
        <div className="home-container">
            <h1 className="title">Portal de Conteúdos</h1>
            <div>
                <button className="button-comunidade" onClick={() => navigateTo('/comunidade')}>Comunidade</button>
            </div>
            <div className="button-container">
                <button className="button-culinaria-gastronomia" onClick={() => navigateTo('/culinaria-gastronomia')}>Culinária e Gastronomia</button>
                <button className="button-moda" onClick={() => navigateTo('/moda')}>Moda</button>
                <button className="button-cosmeticos" onClick={() => navigateTo('/cosmeticos')}>Cosméticos</button>
                <button className="button-engenharia" onClick={() => navigateTo('/engenharia')}>Engenharia</button>
                <button className="button-ti" onClick={() => navigateTo('/ti')}>TI</button>
                <button className="button-veterinaria" onClick={() => navigateTo('/veterinaria')}>Veterinária</button>
            </div>
        </div>
    );
};

// export default Home torna o componente Home dispon'veil para ser importado e utilizado em outros arquivos, como App.js
export default Home;
