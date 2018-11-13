import React, { Component } from 'react'; 
 
class Counter extends Component {
  
    state = {
     value: this.props.value,
     imageUrl: 'https://png.pngtree.com/element_origin_min_pic/16/11/20/185831763f61465.jpg',
     dados: ['tag1','tag2','tag3']
    };
    
    estilo = {
      fontSize: 20,     
      fontWeight: 'bold'
    };
   
    formatCount() {
  
        const{ value } = this.state;    
        const x = <h1>Zero</h1>;
    
        {/* retorne á string 'zero', se o parametro count conter o numero 0 */}
        return value === 0 ? "Zero": value;
    }

    renderTags(){
  
      if(this.state.dados.length === 0) return 'não há dados!';
  
      return ( 
        <ul>{ this.state.dados.map( tag => <li key={tag}>{ tag }</li> ) }</ul>
      );
    }
  
    /* Incrementando dinamicamente o valor do contador, clicando no botão */
    handleIncrement = () => { 
      this.setState({ value: this.state.value + 1 });
    };
  
    render() {  

      return ( 
        <div> 
            {/*
           <div> 
            { this.state.dados.length === 0 && "Por favor, insira dados!" }
            { this.renderTags() }  
          </div>
          */}
          <div>   
            <span style={ this.estilo }>{ this.formatCount() }</span> 
            <button onClick={this.handleIncrement}>Increment</button>                
            <br/><br/>
            {/*
                <img src={ this.state.imageUrl } alt="imagem"/>
            */}
          </div>
        </div>
      );
    }  
}
 
export default Counter;