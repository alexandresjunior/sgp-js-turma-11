import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './paginas/Login';
import Pagina404 from './paginas/Pagina404';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Login />} />
        <Route path="/dashboard" element={<></>} />
        <Route path="/usuarios" element={<></>} />
        <Route path="/projetos" element={<></>} />
        <Route path="/tarefas" element={<></>} />
        <Route path="*" element={<Pagina404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
