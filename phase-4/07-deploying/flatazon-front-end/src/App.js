import './App.css';
import {useEffect, useState} from "react"
function App() {
  const [items, setItems] = useState([]);
  useEffect(()=>{
    async function fetchItems(){
      const res = await fetch('https://obscure-retreat-17411.herokuapp.com/items')
      if(res.ok){
        const data = await res.json()
        console.log(data)
        setItems(data)
      }
    }
    fetchItems()
  },[])
  return (
    <div className="App">
     {
       items.map(item => <h2>{item.item_name} : {item.price}</h2>)
     }
    </div>
  );
}

export default App;
