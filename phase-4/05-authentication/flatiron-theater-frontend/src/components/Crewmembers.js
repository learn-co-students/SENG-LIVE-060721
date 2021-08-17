import styled from 'styled-components'

function Crewmembers({crewmembers}) {

    return (
        <>
        <h1>Crewmembers</h1>
        <Container>
         {crewmembers.map(cm => <div><h1>{cm.name}</h1></div>)}
        </Container>
        </>
    )
}

export default Crewmembers

const Container = styled.div `
    display:flex;
    flex-wrap: wrap;
    div{
        margin:auto;
        padding:auto;
    }
    h1{
        color: white;
        font-size: .8em;
    }
    img{
        width: 300px;
        height: 550px;
        overflow:hidden;
    }
`