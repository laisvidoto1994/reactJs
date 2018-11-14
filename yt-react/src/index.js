import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// dois novos componentes criados Counters e Counter
import Counters  from "./components/counters";
import Counter  from "./components/counter";

//<Counters />, é que eu quero que seja renderizado como se fosse o index principal
//'root'-> será o id do elemento que ele irá procurar no arquivo de index.html e renderizar na tela o conteudo de <Counters />
ReactDOM.render(<Counters />, document.getElementById('root'));

serviceWorker.unregister();

