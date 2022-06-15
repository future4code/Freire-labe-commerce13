import { render } from '@testing-library/react'
import React from 'react'
import styled from 'styled-components'

const CardContainer = styled.div`
    width: 18rem;
    height: auto;
    font-size: 1.5rem;
    border: 1px solid black;
`

const ImgCard = styled.img`
    width: 100%;
    height: 70%;
    margin-bottom: 1rem;
`

const DescricaoCard = styled.p`
    margin: 1rem 1rem;
`

const BotaoCard = styled.button`
    text-align: center;
    display: block;
    margin: 0 auto;
    font-size: 1.3rem;
    padding: 0.3rem 0.5rem;
    margin-bottom: 1rem;
`

class Card extends React.Component {

    state = {
        produtos: [
            {img: "https://s1.static.brasilescola.uol.com.br/be/conteudo/images/imagem-em-lente-convexa.jpg", nome: "meteorito", preco: 30},
        ]
    }

    render() {
        return (
            <CardContainer>
                <ImgCard src={this.props.img} alt={this.props.nome} />
                <DescricaoCard>{this.props.nome}</DescricaoCard>
                <DescricaoCard>R$ {this.props.preco.toFixed(2)}</DescricaoCard>
                <BotaoCard>Adicionar ao carrinho</BotaoCard>
            </CardContainer>
        )
    }
}

export default Card