import React, { useState } from 'react'
import './App.css'
import Input from './Input'
import List from './List'
const App = () => {
  const [todo, setTodo] = useState([]);
  function addItem(item){
    setTodo([...todo, item])
  }
  function DeleteItem(key) {
    let newitem = [...todo]
    newitem.splice(key,1)
    setTodo([...newitem])
  }
  return (
    <div className='main'>
      <div className="menu">
      <Input addItem={addItem}/>
      {todo.map((ListItem,i)=>{
        return(
          <List key={i} index={i} item={ListItem} DeleteItem={DeleteItem}/>
        )
      })}
      </div>
      
    </div>
  )
}

export default App
