import React from "react";
import styled from "styled-components";
import cristais from "./imagens/cristais"



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
        imagem: {cristais}
      },
        {
        nome: "meteoritoB",
        preco: 200,
        id: 2,
        imagem:
      },
        {
        nome: "meteoritoC",
        preco: 300,
        id: 3,
        imagem:
      },
       {
        nome: "meteoritoD",
        preco: 300,
        id: 4,
        imagem:
      },
       {
        nome: "meteoritoE",
        preco: 300,
        id: 5,
        imagem:
      },
       {
        nome: "meteoritoF",
        preco: 300,
        id: 6,
        imagem:
      },
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
const listaDeProdutos = produtosFiltrados.map((produto) => {
  return (
    <div>
      <p>{produto.preco}</p>
      <p>{produto.nome}</p>
    </div>
  )
})
    return (
    <div>
      <div>
        {listaDeProdutos}
      </div>
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
    </div>
    )
  }
}

export default App;
