import React from 'react'
import styled from 'styled-components'
import Card from './Card'

const ProdutosContainer = styled.section`
    padding: 1rem;
    width: 60%;
    height: auto;
`

const DadosContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
`

const SelectDados = styled.select`
    height: 100%;
`

const CardsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 100%;
    row-gap: 1rem;
`

class Produtos extends React.Component {
    state = {
        select: "crescente"
    }

    handleSelect = () => {
        //busca o valor selecionando no botão select do jsx
        const select = document.getElementById("ordem")
        this.setState({
            select: select.options[select.selectedIndex].value
        })
    }

    render() {
        const listaOrdenadaDeProdutos = this.props.lista.sort((a, b) => {
            switch(this.state.select) {
                case "crescente":
                    return a.preco - b.preco;
                case "decrescente":
                    return b.preco - a.preco;
                default:
                    return true;
            }
        })

        const listaDeProdutos = listaOrdenadaDeProdutos.map((produto) => {
            return (
                <Card 
                    img={produto.imagem}
                    alt={produto.nome}
                    nome={produto.nome}
                    preco={produto.preco}
                    key={produto.id}
                />
            )
        })

        return (
            <ProdutosContainer>
                <DadosContainer>
                    <p>Quantidade de Produtos: {listaDeProdutos.length}</p>
                    <SelectDados id='ordem' name="ordem" onChange={this.handleSelect}>
                        <option value="crescente">Crescente</option>
                        <option value="decrescente">Decrescente</option>
                    </SelectDados>
                </DadosContainer>
                <CardsContainer>
                    {listaDeProdutos}
                </CardsContainer>
            </ProdutosContainer>
        ) 
    }
}

export default Produtos