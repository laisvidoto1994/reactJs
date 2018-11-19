import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
 
import Product from './componentes/product.jsx';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Product />, document.getElementById('app'));
 
serviceWorker.unregister();
