import React, { useEffect, useState } from "react"
function App(){
  const [todos,setTodos] = useState([])
  useEffect( ()=>{
  // setInterval(()=>{
  // fetch("https://sum-server.100xdevs.com/todos")
  fetch("https://dummyjson.com/todos")
  .then( async (res)=>{
    const json = await res.json()
    setTodos(json.todos)
  })
  // },10000)
  }
  ,[])  
  return(
    <div> 
    {todos.map(todo => <Todo key={todo.id} title={todo.todo} description={todo.description} completed={todo.completed}></Todo>)}
    </div>
  )
}
function Todo({title,description , completed}){
  return <div>
    <h1 style={{fontFamily:"sans-serif" , color:"purple"}}>{title}</h1>
    <h2 style={{fontFamily:"sans-serif", color:"paleturquoise"}}>{description}</h2>
    <h2 style={{fontFamily:"sans-serif", color:"paleturquoise"}}>{completed ? "Completed" : " Complete it"}</h2>
  </div>
}


export default App