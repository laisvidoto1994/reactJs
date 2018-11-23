import React, { Component } from 'react';
import './App.css';
import Form from './componentes/form.jsx';

const Card = (props) => {
	return(
  	<div style={{margin: '1em'}}>
    	<img width="75" src={props.avatar_url} />
      <div style={{display: 'inline-block', marginLeft:10}}>
				<div style={{fontSize: '1.25em',fontWeight: 'bold'}}>
        	{props.name}
        </div>
        <div>
        	{props.company}
        </div>
      </div>
    </div>
  );
};

/*
let data = [
  {
		name:"Paul O’Shannessy", 
    avatar_url:"https://avatars1.githubusercontent.com/u/8445?v=4", 
    company:"Facebook",
  },
   {
		name:"Ben Alpert", 
    avatar_url:"https://avatars1.githubusercontent.com/u/6820?v=4", 
    company:"Facebook",
  },
];
 */

const CardList = (props) => {
	return(
  	<div> 
  	  {props.cards.map(card => <Card key={card.id}{...card} />)}
  	</div>
  );
}

class App extends Component {
 
	state = {
  	cards: [] 
  }
  
  addNewCard = (cardInfo) => {
  	this.setState(prevState =>({
    	cards: prevState.cards.concat(cardInfo)
    }))
  };
  
	render(){
  	return(
    	<div>
        <Form onSubmit={this.addNewCard} /> 
        <CardList cards={this.state.cards} />
      </div>
    );
  };
}

export default App;
