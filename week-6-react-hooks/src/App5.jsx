import React from "react";
import { useMemo, useState } from "react"
  
function App(){
 const [count, setCount] = useState(0);
 const [input , setInput] = useState(1)
 let sum = useMemo(()=>{
   let sum =0;
  for(let i =0; i <= input; i++){
   sum += i;
  }
  return sum;
 },[input])
 
 return (
  <div>
    <input onChange={(e)=>{
      console.log(e)
      console.log(e.target)
      console.log(e.target.value)
       setInput(e.target.value)
    }} type="number" placeholder="find sum" />
    <br />
    Sum from 1 to {input} is {sum}
    <br />
    <button onClick={function(){
      setCount(count+1);
    }}> Counter: {count} </button>
  </div>
 )
}
export default App