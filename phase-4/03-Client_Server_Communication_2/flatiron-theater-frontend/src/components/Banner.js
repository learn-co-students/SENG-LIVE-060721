import styled from 'styled-components'
import {Link} from "react-router-dom";

function Banner() {
    //This component will act as the banner 
    //It will have the site name
    //user info
    //and login/logout button
    //It will also navigate back to the main page
    return (
        <> 
         <BannerStyle>
         <h1>Flatiron Theater Company</h1>
         <Nav>
           <Link to="/performers/new">Add Performer</Link>
           <Link to="/productions/new">New Production</Link>
           <Link to={"/roles/new"}>Add Roles</Link>
           <Link to="/performers">performers</Link>
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
 