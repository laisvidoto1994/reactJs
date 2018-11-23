import React, { Component } from 'react'; 
 
class Botao extends Component {
 
  render() {
  	return (
    	<button onClick={() => this.props.onClickFunction(this.props.incrementValue)}>
    		+{this.props.incrementValue}
    	</button>
    );
  }  
} 

export default Botao;