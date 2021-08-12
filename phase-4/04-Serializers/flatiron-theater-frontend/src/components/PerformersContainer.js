import styled from 'styled-components'

function PerformersContainer({performers}) {

    return (
        <Container>
         {performers.map(performer => <div><h1>{performer.name}</h1><img src={performer.headshot}/></div>)}
        </Container>
    )
}

export default PerformersContainer

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