import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';



const elemento= <h1> ejemplo de inclusion de un elemento </h1>
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

