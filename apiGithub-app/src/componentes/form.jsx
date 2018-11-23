import React, { Component } from 'react'; 
import axios from 'axios';

class Form extends Component {

	state = { userName: '' }

  haldleSubmit = (event) => {
		event.preventDefault();
      
    axios.get(`https://api.github.com/users/${this.state.userName}`)
    	.then(resp => {
      	 this.props.onSubmit(resp.data);
         this.setState({ userName: '' })
      });
  }; 
  
	render() {
  	return (
    	<form onSubmit={this.haldleSubmit}>
    	  <input type="text" 
        			value={this.state.userName}
              onChange={(event) => this.setState({ userName: event.target.value }) }
        			placeholder="github username" required />
        <button type="submit">add card</button>
    	</form>
    );
  };
}

export default Form;