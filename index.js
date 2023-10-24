import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MinhasRotas from './MinhasRotas'; // Assumindo que 'MinhasRotas.js' é seu componente de rotas
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <MinhasRotas />
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();