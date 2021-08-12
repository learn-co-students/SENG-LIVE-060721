import ProductionCard from './ProductionCard.js'
import ProductionDetail from './ProductionDetail.js'
import React, { useState, useEffect } from 'react'

import styled from 'styled-components'

function ProductionContainer({productions}) {  
    const [selectedProduction, setSelectedProduction] = useState(null);
    const [listedProductions, setListedProductions] = useState([]);

    function changeListedProductions(value){
        switch(value){
            case 'current':
                setListedProductions(productions.filter(production => production.ongoing))
                break;
            case 'past':
                setListedProductions(productions.filter(production => !production.ongoing))
                break;
            case 'all':
                setListedProductions(productions)
                break;
        }

    }
    console.log(listedProductions)
    return (
       <>
            <h1>Productions</h1>
            <Nav>
                <div onClick={() => changeListedProductions('current')}>Current</div>
                <div onClick={() => changeListedProductions('past')}>Past</div>
                <div onClick={() => changeListedProductions('all')}>All</div>
            </Nav>
             <Container> 
             <Wrapper>
            {listedProductions.map(production => <ProductionCard key={production.id} production={production} setSelectedProduction={setSelectedProduction} />)} 
            </Wrapper>
            {selectedProduction?<ProductionDetail production={selectedProduction} />:null}
        </Container>
        </>
    )
}

export default ProductionContainer;

const Nav = styled.nav `
    display:flex;
    background-color:#34bdeb;
    & div{
   
        color: white;
        font-size: 2em;
        margin: .5%;
        padding: .5%;
        &:hover{
            color:yellowgreen;
        }
    }
`

const Wrapper = styled.div `
  
`

const Container = styled.div `
  display:flex;
`

