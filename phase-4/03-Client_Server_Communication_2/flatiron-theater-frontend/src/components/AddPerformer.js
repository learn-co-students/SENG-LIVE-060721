import styled from 'styled-components'
import React, { useState} from 'react'

function AddPerformer() {
    const [name, setName] = useState('')
    const [headshot, setHeadshot] = useState('')
    const [errors, setErrors] = useState([])

    function onSubmit(e){
        e.preventDefault()
        const performer = {
         name,
         headshot
        }
        fetch('http://localhost:3000/performers',{
          method:'POST',
          headers:{'Content-Type': 'application/json'},
          body:JSON.stringify(performer)
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
         Headshot
        <br/>
          <input type="text" value={headshot} onChange={(e) => setHeadshot(e.target.value)} />
        </label>
       
        <input type="submit" value="Submit Performer" />
      </Form>
      {errors?errors.map(e => <div>{e}</div>):null}
        </>
    )
}

export default AddPerformer;

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
