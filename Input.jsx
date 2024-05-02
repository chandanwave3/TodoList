import React, { useState } from 'react'

const Input = (props) => {
    const [input, setInput] = useState('')
  return (
    <div className='input-container'>
      <input type="text" className='input-text' value={input} onChange={e=>{setInput(e.target.value)}}/>
      <button className='btn' onClick={()=>{props.addItem(input)
         setInput("")}}>+</button>
      {/* <h2>{input}</h2> */}
    </div>
  )
}

export default Input
