import styled from 'styled-components'


function ProductionCard({production, setSelectedProduction}) {
    console.log(production)
    return (
        <>
        <Card onClick={() => setSelectedProduction(production)}> 
         <h1>{production.title}</h1>
        </Card>
        </>
    )
}

export default ProductionCard;
const Card = styled.div`
  color: white;
  font-size: .8em;
  height:122px;
  width:500px;
  display:flex;
  margin: 3px;
  &:hover{
      background:yellowgreen;
  }
`
