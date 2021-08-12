import React, {useState, useEffect} from 'react'
import {useHistory } from "react-router-dom";

//Form handles POST and
function ItemForm({items, setItems}) {
    const [itemName, setItemName] = useState("")
    const [price, setPrice] = useState("")
    const [image, setImageUrl] = useState("")
    const [description, setDescription] = useState("")
    const [errors, setErrors] = useState(false)

    let history = useHistory();

 
    async function handleSubmit(e){
        e.preventDefault()


        const itemData = {
            store_id:1,
            item_name: itemName,
            description,
            image_url: image,
            price
        }
        const res = await fetch('http://localhost:3000/items',{
            method: 'POST',
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(itemData)
        })
        const json = await res.json()
        
        setItems([...items, json])
        history.push("/");
    }


    return (
        <div> 
             <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Item Name"
                    value={itemName}
                    name="itemName" 
                    onChange={(e) => setItemName(e.target.value)}/>
                <input 
                    type="text" 
                    placeholder="Image Url"
                    value={image}
                    name="image" 
                    onChange={(e) => setImageUrl(e.target.value)}/>
                <input 
                    type="number" 
                    placeholder="price"
                    value={price}
                    name="price" 
                    onChange={(e) => setPrice(e.target.value)}/>
                <textarea 
                    type="text" 
                    placeholder="description"
                    name="description" 
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}/><br/>
                <input type="submit" value="Post" />
            </form> 
            <div>
                {errors?errors.map(error => <p>{error}</p>): null}
            </div>
        </div>
    )
}

export default ItemForm;
