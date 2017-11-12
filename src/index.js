import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './index.css';
import App from './components/App/App';
import { BrowserRouter } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('root'));
registerServiceWorker();
