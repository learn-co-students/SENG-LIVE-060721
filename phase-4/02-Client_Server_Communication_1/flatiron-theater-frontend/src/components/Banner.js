import styled from 'styled-components'
import {Link} from "react-router-dom";

function Banner() {
    return (
        <> 
         <BannerStyle>
         <h1>Flatiron Theater Company</h1>
         <Nav>
           <Link to="/productions/new">New Production</Link>
           <Link to="/">Home</Link>
         </Nav>
         </BannerStyle>
        </>
    )
}

export default Banner;


const BannerStyle = styled.div `
  display:flex;
  justify-content: space-between;
  color: white;
  font-size: .3em;
  font-family: 'Bebas Neue', cursive;
  position: relative;

`

const Nav = styled.div `

  margin: auto 0 auto auto;
  font-size: 2em;
 a{
  padding:10px;
  color:white;
  text-decoration: none; 
  &:hover{
            color:yellowgreen;
        }
 }
`
 