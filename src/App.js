import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './paginas/Login';
import Pagina404 from './paginas/Pagina404';
import './App.css';
import Usuarios from './paginas/Usuarios';
import Projetos from './paginas/Projetos';
import Tarefas from './paginas/Tarefas';
import UsuarioForm from './paginas/UsuarioForm';
import ProjetoForm from './paginas/ProjetoForm';
import Dashboard from './paginas/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/usuarios" element={<Usuarios />} />
        <Route path="/usuarios/novo" element={<UsuarioForm />} />
        <Route path="/usuarios/:id" element={<UsuarioForm />} />
        <Route path="/projetos" element={<Projetos />} />
        <Route path="/projetos/novo" element={<ProjetoForm />} />
        <Route path="/projetos/:id" element={<ProjetoForm />} />
        <Route path="/tarefas" element={<Tarefas />} />
        <Route path="*" element={<Pagina404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
