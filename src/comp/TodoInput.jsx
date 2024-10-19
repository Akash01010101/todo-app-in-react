import React, { useState } from 'react'

export default function TodoInput(props) {
    const { addTodos, newtodo, setnewtodo } = props

  return (
    <div className='inpdiv'>
        <input required className='formx' type='text' placeholder='Enter todo' value={newtodo} onChange={(e)=>{
                setnewtodo(e.target.value)
        }}/>
        <button className='btn' onClick={()=>{
            addTodos(newtodo)
            setnewtodo('')
        }}>Add</button>
    </div>
  )
}
