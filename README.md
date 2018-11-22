# reactJs

videos de react

https://www.youtube.com/watch?v=Ke90Tje7VS0

https://www.youtube.com/watch?v=ghEdUzwRsHo

https://www.youtube.com/watch?v=PBTYxXADG_k&list=PLillGF-RfqbbiTGgA77tGO426V3hRF9iE

https://in.accenture.com/frontendengineeringarchdev/train/online-training/react-js-redux/

diferença entre props e state-> https://lucybain.com/blog/2016/react-state-vs-pros/

explicação do zero->
https://app.pluralsight.com/player?course=react-js-getting-started&author=samer-buna&name=react-js-getting-started-m5&clip=5&mode=live

# Comandos para react

sudo npm i -g create-react-app@1.5.2 // instalar o node no projeto

Simples React Snippets //para que o react funcione no visual code
Prettier               //para que o react funcione no visual code

npm run eject //

npm start //inicia o biuld dentro da pasta do projeto que foi criada


create-react-app nomeDoProjeto-app //


React Developer Tools //ferramenta de debugar codigo em react

# function component
é um contrato simples. ele recebe um objeto de propriedade, nos chamamos de props no reacty,
e ele retorna o que parece ser HTML, mas é realmente uma sintaxe JavaSript especial chamada JSX. 

exemplo->
const MyComponent  = (props) =>{
	return(
		<elementOrComponent/>
	);
}


# class component
é uma maneira mais detalhada de definir com componente no reacty.
Ele tambem age como uma função que recebe props, mas essa função tambem considera um estado interno privado como entrada
adicional que controla um JSX retornado.não pode mudar suas propiedades só o seu estado interno

exemplo->
class MyComponent extends React.Component{
	render(){
		return(
			<elementOrComponent/>
		);
	}
}  


# props

contem todos os valores que foram passados, quando o componente foi reenderizado.
exemplo->

const Button = function (props) {
	return (
		<button>{props.label}</button>
	);
};

ReactDOM.render(<Button label="do"/>, mountNode); 
