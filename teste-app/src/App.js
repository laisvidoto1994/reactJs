import React, { Component } from 'react';
import './App.css';
import Botao from './componentes/botao.jsx';

const Bordas = (props) => {
  return (
    <div>
      <h3 className="cor">{props.counter}</h3>
    </div>
  );
};

const Result = (props) => {
  return (
    <div>
      <h3>{props.counter}</h3>
    </div>
  );
};

class App extends Component {

  state = { counter: 0 };

  incrementCounter = (incrementValue) => {
    this.setState((prevState) => ({
      counter: prevState.counter + incrementValue
    }));
  };

  render() {
    return (
      <div className="App">
        <Bordas counter={this.state.counter} />

        <Botao incrementValue={1} onClickFunction={this.incrementCounter} />
        <Botao incrementValue={5} onClickFunction={this.incrementCounter} />
        <Botao incrementValue={10} onClickFunction={this.incrementCounter} />
        <Botao incrementValue={100} onClickFunction={this.incrementCounter} />

        <Result counter={this.state.counter} />
      </div>
    );
  }
}

export default App;
