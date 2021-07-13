import React from "react";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";

import { useState, useEffect } from 'react';

function App() {
  const [ pizzas, setPizzas ] = useState([])

  // const pizzaState = useState([])
  // const pizzas = pizzaState[0]
  // const setPizzas = pizzaState[1]

  const [ selectedPizza, setSelectedPizza ] = useState({})

  useEffect(() => {
    fetch('http://localhost:3001/pizzas')
    .then(res => res.json())
    .then(data => setPizzas(data))
  }, [])

  const selectPizza = (pizzaObj) => {
    setSelectedPizza(pizzaObj)
  }

  const persistPizzaUpdate = (updatedPizza) => {
    return fetch(`http://localhost:3001/pizzas/${updatedPizza.id}`,{
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedPizza)
    }).then(res => res.json())
  }

  const handlePizzaChange = (updatedPizza) => {
    // PATCH /pizzas/:id

    persistPizzaUpdate(updatedPizza)
    .then(() => {
      const updatedPizzaList = [...pizzas].map(existingPizza => {
        if(existingPizza.id === updatedPizza.id){
          return updatedPizza
        }else{
          return existingPizza
        }
      })

      setPizzas(updatedPizzaList)
    })
  }

  return (
    <>
      <Header />
      <PizzaForm selectedPizza={selectedPizza} handlePizzaChange={handlePizzaChange} />
      <PizzaList pizzas={pizzas} selectPizza={selectPizza} />
    </>
  );
}

export default App;
