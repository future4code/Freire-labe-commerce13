import React from 'react'
import styled from 'styled-components'

const CardContainer = styled.div`
    width: 31%;
    height: 22rem;
    display: flex;
    flex-direction: column;
    font-size: 1rem;
    border: 1px solid black;
    
`

const ImgCard = styled.img`
    width: 100%;
    height: 70%;
    margin: 0;
`

const DescricaoContainer = styled.div`
    padding: 1rem;
    height: auto;
    text-align: center;
`

const DescricaoTexto = styled.p`
    margin: 0;
    margin-bottom: 0.5rem;
`

const BotaoCard = styled.button`
    width: 75%;
    text-align: center;
    display: block;
    margin: 0 auto;
    font-size: 0.8rem;
`
 
class Card extends React.Component {
    
    render() {
        return (
            <CardContainer>
                
                <ImgCard src={this.props.img} alt={this.props.nome} />
                <DescricaoContainer>
                    <DescricaoTexto>{this.props.nome}</DescricaoTexto>
                    <DescricaoTexto>R$ {this.props.preco.toFixed(2)}</DescricaoTexto>
                    {/* Adicionei um id ao botão que será passado em Produtos */}
                    <BotaoCard onClick={this.props.onClick} id={this.props.id}>Adicionar ao carrinho</BotaoCard>
                </DescricaoContainer>
                
            </CardContainer>
        )
    }
}

export default Card