import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';



ReactDOM.render((
  <BrowserRouter> 
    <App />
  </BrowserRouter>
), document.getElementById('root'))