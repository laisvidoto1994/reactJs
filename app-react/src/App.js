import React, { Component } from 'react';
import Navbar from './components/navbar'
import Counters from "./components/counters";
import './App.css';

class App extends Component {

  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  constructor(){
    super();
    console.log("App - constructor");
  }

  componentDidMount(){
    console.log("App - componentDidMount");
  }

  handleIncrement = counter => {
    const counters = [...this.state.counters];// fazendo uma copia do array do state
    const index = counters.indexOf(counter);// pegando á posição do array

    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
    console.log(counters);
  }

  handleDelete = (counterId) => {
    console.log("handleDelete ", counterId);
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters: counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map
      (c => { c.value = 0; return c; });

    this.setState({ counters: counters });
  };

  render() {
    console.log("App - render");
    return (
      <React.Fragment>
        <Navbar totalCounters={this.state.counters.filter( c=> c.value > 0 ).length}/>
        <main className="container">
          <br />
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
          >
          </Counters>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
