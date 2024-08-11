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
  function HandleTasks(){

  }
  return <div>
    <input type="text" placeholder="Title" onChange={(e)=>{
      setTitle(e.target.value)
    }} /> <br />
    <input type="text" placeholder="Description" onChange={(e)=>{
      setDescription(e.target.value)
    }} /> <br />
    <input type="text" placeholder="Timing" onChange={(e)=>{
      setTiming(e.target.value)
    }} /> <br /> <br />
    <button onClick={HandleTasks}>Add Tasks</button> <br />
   
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