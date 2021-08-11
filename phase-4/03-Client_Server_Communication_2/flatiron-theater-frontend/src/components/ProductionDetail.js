import styled from 'styled-components'
import {Link} from "react-router-dom";


function ProductionDetail({production}) {
    function handleDelete(){
        console.log('hi')
    }
 
    return (
        <Container>
       
         <Image src={production.image}></Image>
         <h1>{production.title}</h1>
         <Paragraph>{production.genera}</Paragraph>
         <Link to={`/productions/${production.id}/edit`}>Edit</Link>
         <button onClick={handleDelete}>Delete</button>
         <Paragraph>{production.description}</Paragraph>
        </Container>
    )
}
const Container = styled.div `
   
`

const Image = styled.img `
    width:500px;
`
const Paragraph = styled.p `
    color: white;
    font-family: Andale Mono, monospace;
   
`

export default ProductionDetail