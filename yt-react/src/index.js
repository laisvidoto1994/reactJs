import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
 
import Counters  from "./components/counters";
import Counter  from "./components/counter";

ReactDOM.render(<Counters />, document.getElementById('root'));

serviceWorker.unregister();

