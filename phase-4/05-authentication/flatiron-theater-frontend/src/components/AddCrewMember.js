import styled from 'styled-components'
import React, { useState} from 'react'

function AddCrewMember({productions}) {
    const [name, setName] = useState('')
    const [jobTitle, setJobTitle] = useState('')
    const [salary, setSalary] = useState('')
    const [productionId, setProductionId] = useState('')
    const [errors, setErrors] = useState([])

  

    function onSubmit(e){
        e.preventDefault()
        const crewmember = {
         name,
         job_title: jobTitle,
         salary,
         production_id: productionId
        }
        fetch('http://localhost:3000/crewmembers',{
          method:'POST',
          headers:{'Content-Type': 'application/json'},
          body:JSON.stringify(crewmember)
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
          Name
          <br/>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
        Job Title
        <br/>
          <input type="text" value={jobTitle} onChange={(e) => setJobTitle(e.target.value)} />
        </label>
        <label>
        Salary
        <br/>
          <input type="number" value={salary} onChange={(e) => setSalary(e.target.value)} />
        </label>
        
        <label>
         Production
        <br/>
          <select value={productionId} onChange={(e) => setProductionId(e.target.value)} >
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

export default AddCrewMember;

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
