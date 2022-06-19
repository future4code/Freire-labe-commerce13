import React from "react";
import styled from "styled-components";
import Cristais from "./imagens/cristais.jpg"
import Diamante from "./imagens/diamante.jpg"
import Kriptonita from "./imagens/kriptonita.jpg"
import MultiCor from "./imagens/muiltiCor.jpg"
import PedrasPreciosas from "./imagens/pedras_preciosas_semi1.jpg"
import Cristal from "./imagens/cristal.png"
import Produtos from "./componentes/Produtos"
import Carrinho from "./componentes/Carrinho"
import "./App.css"



class App extends React.Component {
  state = {
    filtroValorMinimo: 1,
    filtroValorMaximo: 1000000,
    filtroPorNome: "",
    valorTotal: 0,

    produtos: [
      {
        nome:"Cristal Parauapebas",
        preco: 10000,
        id: 1,
        imagem: Cristais,
        quantidade: 0
      },
      {
        nome: "Diamante de Parambú",
        preco: 200565,
        id: 2,
        imagem: Diamante,
        quantidade: 0
      },
      {
        nome: "kriptonita de Soledade",
        preco: 306756,
        id: 3,
        imagem: Kriptonita,
        quantidade: 0
      },
      {
        nome: "Meteorito Conquista",
        preco: 365750,
        id: 4,
        imagem: MultiCor,
        quantidade: 0
      },
      {
        nome: "Meteoritos Sortidos",
        preco: 36570,
        id: 5,
        imagem: PedrasPreciosas,
        quantidade: 0
      },
      {
        nome: "Crisital Bendegó",
        preco: 67650,
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
 

removerItem = (event) => {
    //recebe o id do item clicado e transforma em number
  const idItemClicado = Number(event.target.id)
  //faz um map na lista de produtos que está no state e aumenta a quantidade do produto clicado
  const novaListaProdutos = this.state.produtos.map(produto => {
    if(produto.id === idItemClicado){
      produto.quantidade--;
    }
    return produto
  })
  this.setState({
    produtos: novaListaProdutos
})
};

adicionaItem = (event) =>{
  //recebe o id do item clicado e transforma em number
  const idItemClicado = Number(event.target.id)
  //faz um map na lista de produtos que está no state e aumenta a quantidade do produto clicado
  const novaListaProdutos = this.state.produtos.map(produto => {
    if(produto.id === idItemClicado){
      produto.quantidade++;
    }
    return produto
  })

  //atualiza a lista do state com a nova lista com a quantidade do item aumentada
  this.setState({
    produtos: novaListaProdutos
  })
  this.precoTotal()
};

//calcula o valor total da compra

precoTotal = () => {
 

let total = 0
    for (let x of this.state.produtos) {
      total += (x.preco * x.quantidade)
    }
    this.setState({valorTotal: total })

 
 
  // console.log('preço total foi chamada', this.state.valorTotal, total, item.preco, item.quantidade)

};

  render() {
    const produtosFiltrados = this.state.produtos.filter((produto) => {
      return (produto.preco >= this.state.filtroValorMinimo && produto.preco <= this.state.filtroValorMaximo && produto.nome.includes(this.state.filtroPorNome))   
    }) 

    return (
      <div className="main">
        <div className="filtro">
          <h3>Filtros</h3>
          <label>Valor mínimo:</label>
        <input
          value={this.state.filtroValorMinimo}
          onChange={this.onChangeValorMinimo}      
        />
         <label>Valor máximo:</label>
        <input
          value={this.state.filtroValorMaximo}
          onChange={this.onChangeValorMaximo}      
        />
         <label>Busca por nome:</label>
        <input
          value={this.state.filtronome}
          onChange={this.onChangeNome}      
        />
        </div>
        <div>
          <Produtos 
            lista={produtosFiltrados}
            onClick={this.adicionaItem}
          />
        </div>
        <Carrinho
          pdt = {[...this.state.produtos]}
          remove = {this.removerItem}
          totalFuncao = {this.precoTotal}
          total= {this.state.valorTotal}
          
        />
      </div>
    )
  }
}

export default App;
