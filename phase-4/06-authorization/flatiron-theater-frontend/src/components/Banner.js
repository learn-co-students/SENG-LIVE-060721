import styled from 'styled-components'
import {Link} from "react-router-dom";

function Banner({user,setUser}) {
   function handleLogout(){
     fetch('/logout')
     .then(() => setUser(null))
   }
    return (
        <> 
         <BannerStyle>
         <h1>Flatiron Theater Company </h1>
         <Nav>
          <h3>{user?user.username:null}</h3>
          <h3 onClick={handleLogout}> {user?' Logout':null}</h3>   
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
 