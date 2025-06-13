import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import Home from './components/Home';
import Login from './components/Login'; 
import ProtectedRoute from './components/ProtectedRoute'; 

import CulinariaGastronomia from './components/CulinariaGastronomia';
import Moda from './components/Moda';
import Cosmeticos from './components/Cosmeticos';
import Engenharia from './components/Engenharia';
import TI from './components/TI';
import Veterinaria from './components/Veterinaria';
import Comunidade from './components/Comunidade';
import CadastrarReceita from './components/CadastrarReceita';
import CadastrarDicaCulinaria from './components/CadastrarDicaCulinaria';
import CadastrarDicaModa from './components/CadastrarDicaModa';
import CadastrarDicaEngenharia from './components/CadastrarDicaEngenharia';
import CadastrarDicaCosmeticos from './components/CadastrarDicaCosmeticos';
import CadastrarDicaTI from './components/CadastrarDicaTI';
import CadastrarDicaVeterinaria from './components/CadastrarDicaVeterinaria';
import InserirEspecificacoesCulinaria from './components/InserirEspecificacoesCulinaria';
import InserirEspecificacoesModa from './components/InserirEspecificacoesModa';
import InserirEspecificacoesEngenharia from './components/InserirEspecificacoesEngenharia';
import InserirEspecificacoesCosmeticos from './components/InserirEspecificacoesCosmeticos';
import InserirEspecificacoesTI from './components/InserirEspecificacoesTI';
import InserirEspecificacoesVeterinaria from './components/InserirEspecificacoesVeterinaria';
import InserirIngrediente from './components/InserirIngrediente';
import InserirMidia from './components/InserirMidia';
import EditarDicaOuReceitaCulinaria from './components/EditarDicaOuReceitaCulinaria';
import EditarDicaCosmeticos from './components/EditarDicaCosmeticos';
import EditarDicaEngenharia from './components/EditarDicaEngenharia';
import EditarDicaTI from './components/EditarDicaTI';
import EditarDicaVeterinaria from './components/EditarDicaVeterinaria';
import EditarDicaModa from './components/EditarDicaModa';
import ComunidadeCulinaria from './components/ComunidadeCulinaria';
import ComunidadeModa from './components/ComunidadeModa';
import ComunidadeCosmeticos from './components/ComunidadeCosmeticos';
import ComunidadeEngenharia from './components/ComunidadeEngenharia';
import ComunidadeTI from './components/ComunidadeTI';
import ComunidadeVeterinaria from './components/ComunidadeVeterinaria';

function App() {
  return (
      // O componente Router envolve o componente pai e faz com que todos os componentes dentro dele possam usar a navegação(rotas). Ele é essencial para habilitar a funcionalidade de navegação na aplicação
    // <div className="App"> Envolve o conteúdo da aplicação e a classe App pode ser usada para aplicar estilos.
    // <Routes> É o componente que envolve todas as rotas que serão gerenciadas pela aplicação, ele define como diferentes URLs serão correspondidas a diferentes componentes.
    // <Route path="/" element={<Home />} /> Define que o caminho /(raiz da aplicação) será associado ao componete Home. Quando o usuário visitar a página inicial, o componente Home será exibido
    // <Route path="/cadastrar-receita" element={<CadastrarReceita />} /> Quando o usuário visitar a roda /cadastar-receita, o componente CadastrarReceita será renderizado.
    <Router>
      <div className="App">
        <Routes>
          {/* Rota Pública */}
          <Route path="/login" element={<Login />} />

          {/* Rotas Protegidas */}
          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<Home />} />
            <Route path="/culinaria-gastronomia" element={<CulinariaGastronomia />} />
            <Route path="/moda" element={<Moda />} />
            <Route path="/cosmeticos" element={<Cosmeticos />} />
            <Route path="/engenharia" element={<Engenharia />} />
            <Route path="/ti" element={<TI />} />
            <Route path="/veterinaria" element={<Veterinaria />} />
            <Route path="/comunidade" element={<Comunidade />} />
            <Route path="/cadastrar-receita" element={<CadastrarReceita />} />
            <Route path="/cadastrar-dica-culinaria" element={<CadastrarDicaCulinaria />} />
            <Route path="/cadastrar-dica-moda" element={<CadastrarDicaModa />} />
            <Route path="/cadastrar-dica-engenharia" element={<CadastrarDicaEngenharia />} />
            <Route path="/cadastrar-dica-cosmeticos" element={<CadastrarDicaCosmeticos />} />
            <Route path="/cadastrar-dica-ti" element={<CadastrarDicaTI />} />
            <Route path="/cadastrar-dica-veterinaria" element={<CadastrarDicaVeterinaria />} />
            <Route path="/inserir-especificacoes-culinaria" element={<InserirEspecificacoesCulinaria />} />
            <Route path="/inserir-especificacoes-moda" element={<InserirEspecificacoesModa />} />
            <Route path="/inserir-especificacoes-engenharia" element={<InserirEspecificacoesEngenharia />} />
            <Route path="/inserir-especificacoes-cosmeticos" element={<InserirEspecificacoesCosmeticos />} />
            <Route path="/inserir-especificacoes-ti" element={<InserirEspecificacoesTI />} />
            <Route path="/inserir-especificacoes-veterinaria" element={<InserirEspecificacoesVeterinaria />} />
            <Route path="/inserir-ingrediente" element={<InserirIngrediente />} />
            <Route path="/inserir-midia" element={<InserirMidia />} />
            <Route path="/editar-dica-ou-receita-culinaria" element={<EditarDicaOuReceitaCulinaria />} />
            <Route path="/editar-dica-moda" element={<EditarDicaModa />} />
            <Route path="/editar-dica-cosmeticos" element={<EditarDicaCosmeticos/>} />
            <Route path="/editar-dica-engenharia" element={<EditarDicaEngenharia />} />
            <Route path="/editar-dica-ti" element={<EditarDicaTI />} />
            <Route path="/editar-dica-veterinaria" element={<EditarDicaVeterinaria />} />
            <Route path="/comunidade-culinaria" element={<ComunidadeCulinaria />} />
            <Route path="/comunidade-moda" element={<ComunidadeModa />} />
            <Route path="/comunidade-cosmeticos" element={<ComunidadeCosmeticos />} />
            <Route path="/comunidade-Engenharia" element={<ComunidadeEngenharia />} />
            <Route path="/comunidade-ti" element={<ComunidadeTI />} />
            <Route path="/comunidade-veterinaria" element={<ComunidadeVeterinaria />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;