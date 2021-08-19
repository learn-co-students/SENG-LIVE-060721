import './App.css';
import React, { useState } from 'react'
import { Route, Switch, useHistory} from "react-router";
import styled from 'styled-components'

import ProductionContainer from './components/ProductionContainer.js'
import Banner from './components/Banner.js'
import NewProduction from './components/NewProduction'
import Auth from './components/Auth'


function App() {
  const [user, setUser] = useState(null);
  const history = useHistory();
  console.log(user)
  if(!user)history.push('/sign_up');


  return (
      <Container class="App">
      <Image src='https://images.unsplash.com/photo-1518834107812-67b0b7c58434?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=675&q=80'/>
      <Banner user={user} setUser={setUser}/>
      <Switch>
        <Route exact path="/">
          <ProductionContainer />
        </Route>
        <Route exact path="/productions/new">
          <NewProduction />
        </Route>
        <Route path="/sign_up">
          <Auth setUser={setUser} />
        </Route>
      </Switch>
    </Container>
  );
}

export default App;

const Container = styled.div `
  color: #34bdeb;
  font-size: 3em;
  font-family: 'Bebas Neue', cursive;
  position: relative;

`
const Image = styled.img `
opacity: 0.55;
position: absolute;
right: 0;
z-index: -1;
`