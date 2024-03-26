import React from 'react';
//import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript

//const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className='container'>
    <App />
  </div>
);
