import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// --- Componentes Estruturais ---
import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRoute';
import Layout from './components/Layout';

// --- Páginas Principais dos Temas ---
import Home from './components/Home';
import CulinariaGastronomia from './components/CulinariaGastronomia';
import Moda from './components/Moda';
import Cosmeticos from './components/Cosmeticos';
import Engenharia from './components/Engenharia';
import TI from './components/TI';
import Veterinaria from './components/Veterinaria';
import Comunidade from './components/Comunidade';

// --- Páginas de Cadastro ---
import CadastrarReceita from './components/CadastrarReceita';
import CadastrarDicaCulinaria from './components/CadastrarDicaCulinaria';
import CadastrarDicaModa from './components/CadastrarDicaModa';
import CadastrarDicaEngenharia from './components/CadastrarDicaEngenharia';
import CadastrarDicaCosmeticos from './components/CadastrarDicaCosmeticos';
import CadastrarDicaTI from './components/CadastrarDicaTI';
import CadastrarDicaVeterinaria from './components/CadastrarDicaVeterinaria';

// --- Páginas de Edição (Listas e Formulários) ---
import ListaEditarModa from './components/ListaEditarModa';
import EditarDicaModa from './components/EditarDicaModa';
import ListaEditarCosmeticos from './components/ListaEditarCosmeticos';
import EditarDicaCosmeticos from './components/EditarDicaCosmeticos';
import ListaEditarCulinaria from './components/ListaEditarCulinaria'; 
import EditarDicaOuReceitaCulinaria from './components/EditarDicaOuReceitaCulinaria';
import ListaEditarEngenharia from './components/ListaEditarEngenharia';
import EditarDicaEngenharia from './components/EditarDicaEngenharia';
import ListaEditarTI from './components/ListaEditarTI';
import EditarDicaTI from './components/EditarDicaTI';
import ListaEditarVeterinaria from './components/ListaEditarVeterinaria';
import EditarDicaVeterinaria from './components/EditarDicaVeterinaria';

// --- Páginas da Comunidade por Tema ---
import ComunidadeCulinaria from './components/ComunidadeCulinaria';
import ComunidadeModa from './components/ComunidadeModa';
import ComunidadeCosmeticos from './components/ComunidadeCosmeticos';
import ComunidadeEngenharia from './components/ComunidadeEngenharia';
import ComunidadeTI from './components/ComunidadeTI';
import ComunidadeVeterinaria from './components/ComunidadeVeterinaria';

// --- Componentes Auxiliares ---
import InserirEspecificacoesCulinaria from './components/InserirEspecificacoesCulinaria';
import InserirEspecificacoesModa from './components/InserirEspecificacoesModa';
import InserirEspecificacoesEngenharia from './components/InserirEspecificacoesEngenharia';
import InserirEspecificacoesCosmeticos from './components/InserirEspecificacoesCosmeticos';
import InserirEspecificacoesTI from './components/InserirEspecificacoesTI';
import InserirEspecificacoesVeterinaria from './components/InserirEspecificacoesVeterinaria';
import InserirIngrediente from './components/InserirIngrediente';
import InserirMidia from './components/InserirMidia';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* --- ROTA PÚBLICA --- */}
          {/* A página de login é a única que está fora da área protegida */}
          <Route path="/login" element={<Login />} />

          {/* --- ROTAS PROTEGIDAS --- */}
          {/* O `ProtectedRoute` verifica se o usuário está logado. */}
          <Route element={<ProtectedRoute />}>
            
            {/* O `Layout` adiciona elementos globais, como o botão "Voltar". */}
            <Route element={<Layout />}>

              {/* Páginas Principais */}
              <Route path="/" element={<Home />} />
              <Route path="/culinaria-gastronomia" element={<CulinariaGastronomia />} />
              <Route path="/moda" element={<Moda />} />
              <Route path="/cosmeticos" element={<Cosmeticos />} />
              <Route path="/engenharia" element={<Engenharia />} />
              <Route path="/ti" element={<TI />} />
              <Route path="/veterinaria" element={<Veterinaria />} />
              <Route path="/comunidade" element={<Comunidade />} />

              {/* Páginas de Cadastro */}
              <Route path="/cadastrar-receita" element={<CadastrarReceita />} />
              <Route path="/cadastrar-dica-culinaria" element={<CadastrarDicaCulinaria />} />
              <Route path="/cadastrar-dica-moda" element={<CadastrarDicaModa />} />
              <Route path="/cadastrar-dica-engenharia" element={<CadastrarDicaEngenharia />} />
              <Route path="/cadastrar-dica-cosmeticos" element={<CadastrarDicaCosmeticos />} />
              <Route path="/cadastrar-dica-ti" element={<CadastrarDicaTI />} />
              <Route path="/cadastrar-dica-veterinaria" element={<CadastrarDicaVeterinaria />} />

              {/* Páginas de Inserir Especificações/Mídia */}
              <Route path="/inserir-especificacoes-culinaria" element={<InserirEspecificacoesCulinaria />} />
              <Route path="/inserir-especificacoes-moda" element={<InserirEspecificacoesModa />} />
              <Route path="/inserir-especificacoes-engenharia" element={<InserirEspecificacoesEngenharia />} />
              <Route path="/inserir-especificacoes-cosmeticos" element={<InserirEspecificacoesCosmeticos />} />
              <Route path="/inserir-especificacoes-ti" element={<InserirEspecificacoesTI />} />
              <Route path="/inserir-especificacoes-veterinaria" element={<InserirEspecificacoesVeterinaria />} />
              <Route path="/inserir-ingrediente" element={<InserirIngrediente />} />
              <Route path="/inserir-midia" element={<InserirMidia />} />

              {/* --- ROTAS DE EDIÇÃO (LISTA E FORMULÁRIO) --- */}
              {/* Moda */}
              <Route path="/moda/editar" element={<ListaEditarModa />} />
              <Route path="/editar-dica-moda/:dicaId" element={<EditarDicaModa />} />

              {/* Cosméticos */}
              <Route path="/cosmeticos/editar" element={<ListaEditarCosmeticos />} />
              <Route path="/editar-dica-cosmeticos/:dicaId" element={<EditarDicaCosmeticos />} />

              {/* Culinária */}
              <Route path="/culinaria/editar" element={<ListaEditarCulinaria />} /> 
              <Route path="/editar-dica-ou-receita-culinaria/:id" element={<EditarDicaOuReceitaCulinaria />} />

              {/* Rotas de edição atualizadas para aceitar ID */}
              <Route path="/engenharia/editar" element={<ListaEditarEngenharia />} />
              <Route path="/editar-dica-engenharia/:dicaId" element={<EditarDicaEngenharia />} />

              {/* Culinária */}
              <Route path="/ti/editar" element={<ListaEditarTI />} />
              <Route path="/editar-dica-ti/:dicaId" element={<EditarDicaTI />} />

              {/* Culinária */}
              <Route path="/veterinaria/editar" element={<ListaEditarVeterinaria />} />
              <Route path="/editar-dica-veterinaria/:dicaId" element={<EditarDicaVeterinaria />} />

              {/* Páginas da Comunidade */}
              <Route path="/comunidade-culinaria" element={<ComunidadeCulinaria />} />
              <Route path="/comunidade-moda" element={<ComunidadeModa />} />
              <Route path="/comunidade-cosmeticos" element={<ComunidadeCosmeticos />} />
              <Route path="/comunidade-Engenharia" element={<ComunidadeEngenharia />} />
              <Route path="/comunidade-ti" element={<ComunidadeTI />} />
              <Route path="/comunidade-veterinaria" element={<ComunidadeVeterinaria />} />
            
            </Route>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;