import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
 
import Botao from './componentes/botao.jsx';
import App from './App.js';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('app'));
 
serviceWorker.unregister();
