import React from 'react'
import styled from 'styled-components'
import Card from './Card'

class Produtos extends React.Component {
    render() {
        return (
            <div>
                {this.props.state.produtos.map(produto => {
                    <Card 
                        src={produto.img}
                        alt={produto.nome}
                        preco={produto.preco}
                    />
                })}
            </div>
        ) 
    }
}

export default Produtos