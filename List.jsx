import React from 'react'

const List = (props) => {
  return (
    <div className='list'>
        {props.item}
      <span className='icons'>
        <i className='fa-solid fa-trash-can' onClick={e=>{props.DeleteItem(props.index)}}></i>
      </span>
    </div>
  )
}

export default List
