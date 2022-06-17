import React from 'react';
import styled from 'styled-components'


export default class ItemCarrinho extends React.Component{

//   state = {
//     quantidade: 1,
  
//   };


removerItem = () => {
 this.setState({quantidade: this.state.quantidade -1})
   }

  render(){
     
    return (
  <div>
      <tr>
      <td> <p>{this.state.prop.quantidade} x </p></td>
      <td><p>produtos.nome</p></td> 
      <td><button onClick={this.removerItem}>Remover</button></td>
      </tr>
  </div>
  )
  }
  
}