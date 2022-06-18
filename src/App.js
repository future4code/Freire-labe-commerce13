import React from "react";
// import styled from "styled-components";
import Cristais from "./imagens/cristais.jpg"
import Diamante from "./imagens/diamante.jpg"
import Kriptonita from "./imagens/kriptonita.jpg"
import MultiCor from "./imagens/muiltiCor.jpg"
import PedrasPreciosas from "./imagens/pedras_preciosas_semi1.jpg"
import Cristal from "./imagens/cristal.png"
import Produtos from "./componentes/Produtos"
import Carrinho from "./componentes/Carrinho"

class App extends React.Component {
  state = {
    filtroValorMinimo: 1,
    filtroValorMaximo: 1000000,
    filtroPorNome: "",

    produtos: [
      {
        nome:"meretoritoA",
        preco: 100,
        id: 1,
        imagem: Cristais,
        quantidade: 0
      },
      {
        nome: "meteoritoB",
        preco: 200,
        id: 2,
        imagem: Diamante,
        quantidade: 9
      },
      {
        nome: "meteoritoC",
        preco: 300,
        id: 3,
        imagem: Kriptonita,
        quantidade: 0
      },
      {
        nome: "meteoritoD",
        preco: 300,
        id: 4,
        imagem: MultiCor,
        quantidade: 0
      },
      {
        nome: "meteoritoE",
        preco: 300,
        id: 5,
        imagem: PedrasPreciosas,
        quantidade: 0
      },
      {
        nome: "meteoritoF",
        preco: 300,
        id: 6,
        imagem: Cristal,
        quantidade: 0
      }
    ]
  }
  onChangeValorMinimo = (event) => {
    this.setState({
      filtroValorMinimo: event.target.value,
    })
  };
  onChangeValorMaximo = (event) => {
    this.setState({
      filtroValorMaximo: event.target.value,
    })
  };
  onChangeNome = (event) => {
    this.setState({
      filtroPorNome: event.target.value,
    })
  };
  //Adiciona Item no carrnho- chamada no botão do card
 

removerItem = () => {
    this.setState({quantidade: this.state.produtos.quantidade -1})
}

adicionaItem = () =>{
  this.setState({quantidade: this.produtos.quantidade +1})
};
//calcula o valor tatal da compra
precoTotal = () => {
    let total;
    for (let x of this.state.produtos) {
      total =+ this.produtos.preco * this.produtos.quantidade
    }
    this.setState({valorTotal: total })

}


  render() {
    const produtosFiltrados = this.state.produtos.filter((produto) => {
      return (produto.preco >= this.state.filtroValorMinimo && produto.preco <= this.state.filtroValorMaximo && produto.nome.includes(this.state.filtroPorNome))   
    }) 

    //  Retirei o map que estava aqui e passei para o componente produtos

    return (
      <div>
        <input
          value={this.state.filtroValorMinimo}
          onChange={this.onChangeValorMinimo}      
        />
        <input
          value={this.state.filtroValorMaximo}
          onChange={this.onChangeValorMaximo}      
        />
        <input
          value={this.state.filtronome}
          onChange={this.onChangeNome}      
        />
        <div>
          <Produtos lista={produtosFiltrados}/>
        </div>
        <Carrinho
          pdt = {[...this.state.produtos]}
          onClick = {this.removerItem}
        />
      </div>
    )
  }
}

export default App;
