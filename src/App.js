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
        imagem: Cristais
      },
      {
        nome: "meteoritoB",
        preco: 200,
        id: 2,
        imagem: Diamante
      },
      {
        nome: "meteoritoC",
        preco: 300,
        id: 3,
        imagem: Kriptonita
      },
      {
        nome: "meteoritoD",
        preco: 300,
        id: 4,
        imagem: MultiCor
      },
      {
        nome: "meteoritoE",
        preco: 300,
        id: 5,
        imagem: PedrasPreciosas
      },
      {
        nome: "meteoritoF",
        preco: 300,
        id: 6,
        imagem: Cristal
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
        <Carrinho/>
      </div>
    )
  }
}

export default App;
