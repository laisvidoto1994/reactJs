import React, { Component } from 'react';

class Counter extends Component {

  estilo = {
    fontSize: 20,
    fontWeight: 'bold'
  };

  formatCount() {

    const { value } = this.props.counter; 
 
    return value === 0 ? "Zero" : value;
  }

  renderTags() {

    if (this.state.dados.length === 0) return 'não há dados!';

    return (
      <ul>{this.state.dados.map(tag => <li key={tag}>{tag}</li>)}</ul>
    );
  }

  componentDidUpdate( prevProps, prevState){
    console.log("prevProps", prevProps);
    console.log("prevState", prevState);
    if(prevProps.counter.value !== this.props.counter.value){

    }
  }; 
  
  componentWillUnmount(){
    console.log("app - Counter->componentWillUnmount");
  }

  render() {
    console.log("App - Counter->render");
    return (
      <div className="espacamento1 espacamento3">

        <div>
          <span
            className="espacamento2"
            style={this.estilo}
          >
            {this.formatCount()}
          </span>
          <button
            className="corCinza"
            onClick={() => this.props.onIncrement(this.props.counter)}
          >
            Increment
            </button>
          <button
            className="espacamento3 corVermelho"
            onClick={() => this.props.onDelete(this.props.counter.id)}
          >
            delete
            </button>
          <br /><br />
        </div>
      </div>
    );
  }
}

export default Counter;