import React,{useState} from 'react'

function Array() {
    const[items,setItems]=useState([])
    const AddItems = ()=>{
      setItems([...items,{
        Id: items.length,
        value: Math.floor(Math.random()*10)+1
      }])
    }
  return (
    <div>
      <button onClick={AddItems}>Add Item</button>
        <ul>
          {items.map(item=>(
          <li key = {item.Id}>{item.value}</li>
          ))}
        </ul>
    </div>
  )
}

export default Array
