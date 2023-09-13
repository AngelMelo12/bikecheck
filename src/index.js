import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Menu from './components/menu';
import Home from './pages/home'
import Cadastro from './pages/cadastro'
import Contato from './pages/contato'
import Login from './pages/login'
import Proposito from './pages/proposito'
import Sobre from './pages/sobre'
import Vistoria from './pages/vistoria'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Menu />}>
          <Route index element={<Home />} />
          <Route path="cadastro" element={<Cadastro />} />
          <Route path="contato" element={<Contato />} />
          <Route path="login" element={<Login />} />
          <Route path="proposito" element={<Proposito />} />
          <Route path="sobre" element={<Sobre />} />
          <Route path="vistoria" element={<Vistoria />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
