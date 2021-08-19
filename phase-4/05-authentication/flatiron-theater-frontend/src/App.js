import './App.css';
import React, { useState, useEffect } from 'react'
import { Route, Switch } from "react-router";
import styled from 'styled-components'

import ProductionContainer from './components/ProductionContainer.js'
import Banner from './components/Banner.js'
import NewProduction from './components/NewProduction'
import EditProduction from './components/EditProduction'
import PerformersContainer from './components/PerformersContainer'
import AddPerformer from './components/AddPerformer'
import AddRole from './components/AddRole'
import AddCrewMember from './components/AddCrewMember';
import Crewmembers from './components/Crewmembers'
import Auth from './components/Auth'
const API_PATH = `http://localhost:3000/`

function App() {
  const [productions, setProductions] = useState('');
  const [performers, setPerformers] = useState([])
  const [crewmembers, setCrewmembers] = useState([])
  console.log(productions)
  useEffect(() => {
    async function fetchItems(){
      let resProduction = await fetch(API_PATH+'/productions')
      let jsonProduction = await resProduction.json()
      setProductions(jsonProduction)
      let resPerformers = await fetch(API_PATH+'/performers')
      let jsonPerformers = await resPerformers.json()
      setPerformers(jsonPerformers)
      let resCrewmembers = await fetch(API_PATH+'/crewmembers')
      let jsonCrewmembers = await resCrewmembers.json()
      setCrewmembers(jsonCrewmembers)
    }
    fetchItems();
  },[]);

  return (
      <Container class="App">
      <Image src='https://images.unsplash.com/photo-1518834107812-67b0b7c58434?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=675&q=80'/>
      <Banner/>
      <Switch>
        <Route exact path="/">
          <ProductionContainer productions={productions} />
        </Route>
        <Route exact path="/productions/new">
          <NewProduction />
        </Route>
        <Route path="/productions/:id/edit">
          <EditProduction productions={productions} />
        </Route>
        <Route exact path="/performers">
          <PerformersContainer performers={performers} />
        </Route>
        <Route exact path="/crewmembers">
          <Crewmembers crewmembers={crewmembers} />
        </Route>
        <Route path="/performers/new">
          <AddPerformer />
        </Route>
        <Route path="/roles/new">
          <AddRole productions={productions} performers={performers} />
        </Route>
        <Route path="/crewmember/new">
          <AddCrewMember productions={productions} />
        </Route>
        <Route path="/sign_up">
          <Auth />
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