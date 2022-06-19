
import React from 'react';

import styled from 'styled-components';

//Modificações de 18/06/2022

const ContainerCarrinho = styled.div`
    width: 20%;
    margin-left: 2%;
    margin-top: 2%;
    border: 1px solid black;
    padding: 0.5%;
`
const TabelaCarrinho = styled.table`
    margin: auto;
`
export default class Carrinho extends React.Component{

 
  render(){
    
    //Renderização condicional, caso tenha 0 itens não renderiza 
    let item;

    const produtosDois = this.props.pdt.map((produto) => {
       if(produto.quantidade > 0){
        return item =      
        <tr><td> <p>{produto.quantidade} x </p></td>
       <td><p>{produto.nome}</p></td> 
       <td><button onClick={this.props.onClick}>Remover</button></td></tr> 
  
      }
    })
    
    return (
  <ContainerCarrinho>
   <h3>Carrinho 🛒</h3>
   <TabelaCarrinho>
   {produtosDois}
   </TabelaCarrinho>
   
    <p>Valor Total: R$ {this.props.valorTotal}</p>
  
  </ContainerCarrinho>
  )
  }
  
}