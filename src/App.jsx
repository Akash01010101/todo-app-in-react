import { useState,useEffect } from "react";
import TodoInput from "./comp/TodoInput"
import TodoList from "./comp/TodoList"

function App() {
  const [todos,setTodos] = useState([])
  const [newtodo,setnewtodo] = useState('')
  function persistTodos(newList){
    localStorage.setItem('todos',JSON.stringify({todos:newList}))
  }
  function addTodos(todonew){
      const newlist = [...todos,todonew]
      persistTodos(newlist)
      setTodos(newlist)
  }
  function handleDelete(index){
    const newList = todos.filter((todo,todoIndex)=>{
      persistTodos(newList)
      return todoIndex !== index
    })
    setTodos(newList)
  }
  function handleEdit(index){
      const newVal = todos[index]
      setnewtodo(newVal)
      handleDelete(index)
  }
  useEffect(()=>{
    if (!localStorage) return
    let localTodos = localStorage.getItem('todos')
    if (!localTodos){
      return
    }
    localTodos = JSON.parse(localTodos).todos
    setTodos(localTodos)
  },[])
 
  return (
    <>
    <header>To Do List</header>
     <main>
    <TodoInput addTodos={addTodos} setnewtodo={setnewtodo} newtodo={newtodo}/>
    <TodoList todos={todos} handleDelete={handleDelete} addTodos={addTodos} setnewtodo={setnewtodo} handleEdit={handleEdit}/>
   </main>
    </>
  
  )
}

export default App
