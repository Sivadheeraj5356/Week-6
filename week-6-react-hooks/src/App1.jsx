import { useState } from 'react'
let counter = 4;
function App(){
 const [todos, setTodos] = useState([{
  id : 1,
  "title" : "Study DSA",
  "description": "Early morning at 6 Am"
 },{
  id : 2,
  "title" : "Study Development",
  "description": "At 9 pm"
 },{
  id : 3,
  "title" : "Study Electronics",
  "description": "After College hours"
 }
])
function addTodo(){
  setTodos([...todos,{
    id : counter++,
    title :" todys task:" + Math.random(),
    description : " Timing : " + Math.random()
  }])
}
  return <>
  <Heading title="Todo Application"></Heading>
  <button onClick={addTodo}>Add a Todo</button>

   <Todo title={"Go to gym"} description={"At 6pm"}></Todo>
   {todos.map(todo => <Todo key={todo.id} title={todo.title} description={todo.description} />)}
    </>
}
function Todo({title,description}){
   return <div>
    <h2>{title}</h2>
    <h3>{description}</h3>

   </div>
}
function Heading({title}){
  return <div>
   <h1>{title}</h1>
  </div>
}
export default App