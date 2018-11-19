import React, { Component } from 'react'
import '../App.css';

/* https://www.youtube.com/watch?v=amNV9tCUe2k */
class Product extends Component {

    constructor() {
        super();
        this.state = {
            products: []
        }
    }

    componentDidMount() {

        fetch('http://localhost:1234/produtos')
            .then(res => res.json())
            .then(res => {
                this.setState({
                    products: res
                });
            })
            .catch(error => {
                console.log("error " + error);
            });
    }

    buscar() {
        var keyword = this.refs.keyword.value;

        fetch('http://localhost:1234/produtos/' + keyword)
            .then(res => res.json())
            .then(res => {
                console.log(res.name);
                /*this.setState({
                    products: res
                });
                */
            })
            .catch(error => {
                console.log("error " + error);
            });
    }
      
    render() {
        return (
            <div>
                <h3>Product List </h3>
                Quantidade Total: {this.state.products.length}
                <br />
                Product Id: <input type="text" ref="keyword" />
                <input type="button" value="buscar" onClick={this.buscar.bind(this)} />
                <br />
                <table >
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Nome do Produto</th>
                            <th>Valor</th>
                            <th>Quantidade</th> 
                            <th>Imagem</th>
                            <th>Sub Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.products.map(function (product, index) {
                            return (
                                <tr>
                                    <td>{product.id}</td>
                                    <td >{product.name}</td>
                                    <td>R$ {product.price}</td>
                                    <td>{product.quantity}</td> 
                                    <td> <img src={product.photo} alt="ta" className="confImagem" /></td>
                                    <td>R$ {product.price * product.quantity}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Product;