import styled from 'styled-components'
import React, { useState,useEffect} from 'react'
import {useParams} from "react-router-dom";


function EditProduction({productions}) {
  const params = useParams()
  console.log(productions.find(production => production.id == params.id))
    const [title, setTitle] = useState('')
    const [genre, setGenres] = useState('')
    const [budget, setBudget] = useState('')
    const [image, setImage] = useState('')
    const [director, setDirector] = useState('')
    const [artisticDirector, setArtisticDirector] = useState('')
    const [description, setDescription] = useState('')
    const [productionId, setProductionId] = useState('')
    useEffect(() => {
      const production = productions.find(production => production.id == params.id)
      setTitle(production.title)
      setGenres(production.genre)
      setBudget(production.budget)
      setImage(production.image)
      setDirector(production.director)
      setArtisticDirector(production.artistic_director)
      setDescription(production.description)
      setProductionId(production.id)
    },[]);

    
  function onSubmit(e){
    e.preventDefault()
    const production = {
      title,
      genre,
      budget,
      image,
      director,
      artistic_director: artisticDirector,
      description,
      ongoing:true
    }
    fetch(`http://localhost:3000/productions/${productionId}`,{
      method:'PATCH',
      headers:{'Content-Type': 'application/json'},
      body:JSON.stringify(production)
    })
    .then(res => res.json())
    .then(console.log)
}
    return (
        <>         
        <Form onSubmit={(e) => onSubmit(e)}>
        <label>
          Title
          <br/>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </label>
        <label>
        Genre
        <br/>
          <input type="text" value={genre} onChange={(e) => setGenres(e.target.value)} />
        </label>
        <label>
        Budget
        <br/>
          <input type="number" value={budget} onChange={(e) => setBudget(e.target.value)} />
        </label>
        <label>
        Image
        <br/>
          <input type="text" value={image} onChange={(e) => setImage(e.target.value)} />
        </label>
        <label>
        Director
        <br/>
          <input type="text" value={director} onChange={(e) => setDirector(e.target.value)} />
        </label>
        <label>
        Artistic Director
        <br/>
          <input type="text" value={artisticDirector} onChange={(e) => setArtisticDirector(e.target.value)} />
        </label>
        <label>
        Description
        <br/>
          <textarea type="text" rows="4" cols="50" value={description} onChange={(e) => setDescription(e.target.value)} />
        </label>
        <input type="submit" value="Edit Production" />

      </Form>
        </>
    )
}

export default EditProduction;

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
