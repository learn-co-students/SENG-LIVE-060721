import styled from 'styled-components'
import React, { useState} from 'react'

function AddRole({performers, productions}) {
    const [name, setName] = useState('')
    const [performer, setPerformer] = useState('')
    const [production, setProduction] = useState('')
   
    const [errors, setErrors] = useState([])

    function onSubmit(e){
        e.preventDefault()
        const role = {
            character_name: name,
         performer_id: performer,
         production_id: production
        }
        fetch('http://localhost:3000/character_roles',{
          method:'POST',
          headers:{'Content-Type': 'application/json'},
          body:JSON.stringify(role)
        })
        .then(res => res.json())
        .then(json => {
            console.log(json.error)
            if(json.error) setErrors(json.error)
        })
    }
    return (
        <> 
        <Form onSubmit={onSubmit}>
        <label>
          Role
          <br/>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
         Performer
        <br/>
          <select value={performer} onChange={(e) => setPerformer(e.target.value)} >
          <option >Select Performer</option>

            {performers.map(performer => <option value={performer.id}>{performer.name}</option>)}
          </select>
        </label>
        <label>
         Production
        <br/>
          <select value={production} onChange={(e) => setProduction(e.target.value)} >
          <option >Select Production</option>
            {productions.map(production => <option value={production.id}>{production.title}</option>)}
          </select>
          
        </label>
       
        <input type="submit" value="Submit Performer" />
      </Form>
      {errors?errors.map(e => <div>{e}</div>):null}
        </>
    )
}

export default AddRole;

const Form = styled.form `
    color: white;
    font-family: Andale Mono, monospace;
    font-size: .5em;
    margin:auto;
    padding:auto;
    width:50%;
    display:flex;
    flex-direction:column;
    input{
        width: 100%;
    }
    textarea{
        width: 100%;
    }
    input[type=submit]{
        font-family: 'Bebas Neue', cursive; 
        font-size: 1em;
        background-color:#34bdeb;
        color:white;
    }
`
