
import React from 'react';
import ItemCarrinho from './ItemCarrinho';
import styled from 'styled-components';
import './Carrinho.css';

let produtos;

const ContainerCarrinho = styled.div`
    width: 20%;
    margin-left: 75%;
    margin-top: 2%;
    border: 1px solid black;
    padding: 0.5%;
`
const TabelaCarrinho = styled.table`
    margin: auto;
`
export default class Carrinho extends React.Component{

  state = {
    quantidade: 1,
    valorTotal: 0,
  
  };

  //Adiciona Item no carrnho- chamada no botão do card
  adicionaItem = () =>{
    this.setState({quantidade: this.state.quantidade +1})
  }

  //Remove item do caarinho - chamado no botao do item
  removerItem = () => {
      this.setState({quantidade: this.state.quantidade -1})
  }

  //calcula o valor tatal da compra
  precoTotal = () => {
      let total;
      for (let x of produtos) {
        total =+ this.state.produtos.preco * this.state.quantidade
      }
      this.setState({valorTotal: total })

  }

  render(){
    
    //Renderização condicional, caso tenha 0 itens não renderiza 
    let item;

    if(this.state.quantidade > 0){
      item =       <ItemCarrinho/>

    }
    return (
  <ContainerCarrinho>
   <h3>Carrinho 🛒</h3>
   <TabelaCarrinho>
   {item}
   </TabelaCarrinho>
   
    <p>Valor Total: R$ valorTotal</p>
  
  </ContainerCarrinho>
  )
  }
  
}