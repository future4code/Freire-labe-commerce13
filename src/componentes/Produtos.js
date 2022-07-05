import React from 'react'
import styled from 'styled-components'
import Card from './Card'

//Container pai das divs DadosContainer e CardsContainer
const ProdutosContainer = styled.section`
    padding: 1rem;
    width: 700px;
    height: auto;
    margin: 0px 30px;
    background-color: rgb(0, 6, 20, 0.7);
    color:lightblue;
`
//Mostra a quantidade de produtos e o select
const DadosContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
`

const SelectDados = styled.select`
    height: 100%;
`
//mostra os produtos
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

    //busca o valor selecionando no botão select do jsx e atualiza o state
    handleSelect = () => {
        const select = document.getElementById("ordem")
        this.setState({
            select: select.options[select.selectedIndex].value
        })
    }

    render() {
        
        //recebe a lista já filtrada do App.js e ordena ela
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

        //mapeia e cria um card para cada elemento da lista que foi ordenada
        const listaDeProdutos = listaOrdenadaDeProdutos.map((produto) => {
            return (
                <Card 
                    img={produto.imagem}
                    alt={produto.nome}
                    nome={produto.nome}
                    preco={produto.preco}
                    key={produto.id}
                    // Adicionei duas novas propriedades, 
                    // onClick para passar a chamadad e função entre o card e app
                    // e id para identificar cada item no carrinho
                    onClick={this.props.onClick}
                    id={produto.id}
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
                    {/* imprime os produtos filtrados e ordenados aqui */}
                    {listaDeProdutos}
                </CardsContainer>
            </ProdutosContainer>
        ) 
    }
}

export default Produtos