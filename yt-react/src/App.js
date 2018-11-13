import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

{/* https://www.youtube.com/watch?v=ghEdUzwRsHo */ }
class MyBotao extends Component {
  render() {
    return (
      <button
        onClick={() => { this.props.funcaoClick(this.props.label); }}
      >
        {this.props.label}
      </button>
    );
  }
}
 
class MyLabel extends Component {
  render() {
    {/* this.props.text-> ele pega o texto que eu passar no html */ }
    return <p>Cliquei no: {this.props.text}</p>

  }
}
 

{/* tem obrigação da classe app herdar de Component do React */ }
class App extends Component {
  /* this.state */
  constructor(props) {
    super(props);

    this.state = {
      labelText: '',
    };
  }

  setLabelText = (labelText) => {
    this.setState({ labelText: labelText });
  }

  render() {
    {/* render é para reenderizar, e retornar o que quer */ }
    return (
      <div className="App">
        {/*
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer" >
            Learn React
          </a>
        </header>
      */}

        <div>

          <h1>Exercicio de ReactJs</h1>
  
          {/* Chamando á classe do butão */}
          <MyLabel text={this.state.labelText} />

          <MyBotao funcaoClick={this.setLabelText} label="Botão 1" />
          <MyBotao funcaoClick={this.setLabelText} label="Botão 2" />
          <MyBotao funcaoClick={this.setLabelText} label="Botão 3" />
          <MyBotao funcaoClick={this.setLabelText} label="Botão 4" />
        </div>
      </div>
    );
  } 
}

export default App;
