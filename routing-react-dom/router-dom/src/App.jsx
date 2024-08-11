import { useState } from "react";
import { useContext } from "react";
import { useRecoilState, useRecoilValue , RecoilRoot, useSetRecoilState } from "recoil";
import { countAtom, evenSelector } from "./store/atoms/count";
function App(){
   return (
    <div>
     <RecoilRoot>
     <AddTodo></AddTodo>
     </RecoilRoot>
    </div>
   )
}
function AddTodo(){
  const[title,setTitle] = useState("")
  const[description,setDescription] = useState("")
  const[timing,setTiming] = useState("")
const[tasks, setTasks] = useState([])
  function HandleTasks(){
   if(title && description && timing){
    const newTask = {title, description , timing}
    setTasks([...tasks, newTask])
    setTitle("")
    setDescription("")
    setTiming("")
   }
  }
  return <div>
    <input type="text" placeholder="Title" value={title} onChange={(e)=>{
      setTitle(e.target.value)
    }} /> <br />
    <input type="text" placeholder="Description" value={description} onChange={(e)=>{
      setDescription(e.target.value)
    }} /> <br />
    <input type="text" placeholder="Timing" value={timing} onChange={(e)=>{
      setTiming(e.target.value)
    }} /> <br /> <br />
    <button onClick={HandleTasks}>Add Tasks</button> <br />
    {/* { showDetails && (
      <TaskDetails title={title} description={description} timing={timing} />
    )} */}
         <TaskLists tasks={tasks}></TaskLists>


   
  </div>
}
function TaskLists({tasks}){
  return( <div>
    {tasks.map((task, index) => (
      <div>
      <h2>Task :{task.title}</h2>
      <h2>Description :{task.description}</h2>
      <h2>Timing : {task.timing}</h2>
      </div>
    ))}
  </div>)

}
function TaskDetails({title, description , timing}){
 return <div>
    <h2> Title : {title}</h2>
    <h2> Description : {description}</h2>
    <h2> Timing : {timing}</h2>
 </div>
}
function Count(){
  return <div>

    <CountRenderer></CountRenderer>
   <Buttons ></Buttons>
   <OddOrEven></OddOrEven>
   <EvenCountRenderer></EvenCountRenderer>
   
  </div>
}
function CountRenderer(){
  const count = useRecoilValue(countAtom)
  return <div>
    <h2 style={{fontFamily:"sans-serif"}}>Count is <b> {count} </b></h2>
  </div>
}

function Buttons(){
  // const [count, setCount] = useRecoilState(countAtom)
  const setCount = useSetRecoilState(countAtom)

  return <div>
     <button onClick={()=>{
      setCount(count => count +1)
     }}> Increase</button>
     <button onClick={()=>{
      setCount(count => count-1)
     }}> Decrease</button>
  </div>
}
function OddOrEven(){
  const count = useRecoilValue(countAtom)
  if(count % 2 == 0){
    return <div>
      <h2>It is even</h2>
    </div>
  }
  else{
    return <div>
      <h2>It is odd</h2>
    </div>
  }
}
function EvenCountRenderer(){
  const isEven = useRecoilValue(evenSelector)
  return(
    <div>
      {isEven ? "It is odd" : "It is even"}
    </div>
  )
}
 export default App