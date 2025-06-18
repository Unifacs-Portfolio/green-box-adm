Base do site por: https://github.com/gscoimbra

Projeto de Extensão CTN 2024-2

Por que usar React:

1. Componentização: React permite dividir a interface do usuário em componentes reutilizáveis, facilitando o desenvolvimento e a manutenção.

2. Virtual DOM: React utiliza o conceito de Virtual DOM, que melhora a performance da aplicação ao fazer atualizações eficientes no DOM real.

3. Comunidade e Ecossistema: O React tem uma comunidade enorme e uma vasta gama de bibliotecas e ferramentas que facilitam a adição de funcionalidades ao projeto, como o React Router(para gerenciamento de rotas).

4. Unidirecional: O React utiliza o fluxo de dados unidirecional, o que torna o gerenciamento de dados mais previsível e facilita o rastreamento de estados da aplicação.

Estrutura do Projeto:

1. node_modules: Contém todas as dependências do projeto instaldas via npm. Não deve ser modificado manualmente.

2. public: Contém arquivos estáticos como o index.html, onde o React será injetado, e outros arquivos públicos como imagens e ícones.

3. src: O diretório principal onde todo o código da aplicação React reside.

    - components: Diretório contendo os componentes do projeto.
    
    - App.js: O componente principal que gerencia as rotas.

    - index.js: O ponto de entrada da aplicação, onde o React é renderizado no DOM(dentro de index.html do public)

    - App.css e Home.css: Arquivos de estilo que aplicam CSS aos componentes da aplicação.

4. Arquivos auxiliares: Arquivos como package.json, .gitignore, README.md e arquivos de testes fazem parte da insfraestrutura do projeto, ajudando na configuração, versionamento e testes.

    - App.test.js: Este arquivo é usado para testes automatizados. Ele contém casos de teste que verificam o comportamento do aplicativo. No caso do React, o arquivo geralmente usa o Jest e a biblioteca React Testing Library para garantir que o componente App.js funcione como esperado. É útil para garantir que as mudanças no código não quebrem funcionalidades importantes.

    - logo.svg: É um ícone SVG do logotipo do React.

    - reportWebVitals.js: Esse arquivo faz parte do kit padrão do create-react-app. Ele mede e coleta dados de desempenho da aplicação(como tempo de carregamento, tempo de resposta do usuário, etc.) utilizando API Web Vitals. Essas métricas podem ser enviadas para um serviço de análise como Google Analytics.

    - setupTests.js: Este arquivo configura o ambiente de testes antes de executar qualquer teste com Jest.

    - .gitignore: Este arquivo lista os arquivos e diretórios que o Git deve ignorar. Por exemplo node_modules/ que é o diretóri onde ficam as dependências npm, não precisa ser versionado porque pode ser reconstruído ou build/ ou dist/ que são pastas de distribuição que são geradas automaticamente durante o processo de build.

    - package-lock.json: Este arquivo é gerado automaticamente pelo npm para garatir que as mesmas versões de dependências sejam instaladas, independentemente de onde o projeto esteja sendo executado. Ele "trava" as versões exatas de todas as dependências e subdependências do projeto garantindo consistência entre ambientes de desenvolvimento e produção. Deve ser mantido no GitHub para garantir que as dependências sejam replicadas corretamente em outras máquinas.

    - package.json: Um dos arquivos mais importantes, ele define as informações básicas do projeto(nome, versão, autor, etc.), lista as dependências(Bibliotecas necessárias para rodar a aplicação(como react, react-router-dom)), devDependencies(Bibliotecas usadas apenas em ambientes de desenvolvimento como Jest para testes), scripts(comandos que podem ser executados como npm start para rodar a aplicação em modo de desenvolvimento ou npm build para gerar a versão em produção).

    - README.md: Arquivo de documentação.

Como iniciar o projeto:

1. Clone esse repositório, git clone https://github.com/gscoimbra/Projeto-Extensao.git

2. Após o clone, navegue até a pasta raiz do projeto, onde está o arquivo package.json.

3. Estando na pasta raiz, acesse o terminal e digite npm install para instalar as dependências.

4. Estando na pasta raiz, acesse o terminal e digite npm start para iniciar a aplicação.

