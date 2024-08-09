import { useState } from "react";
function App(){
   const [count, setCount] = useState(0);
   return (
    <div>
     <Count count={count} setCount={setCount}></Count>
    </div>
   )
}
function Count({count, setCount}){
  return <div>
    <h1>Count is {count}</h1>
   <Buttons count={count} setCount={setCount}></Buttons>
  </div>
}

function Buttons({count, setCount}){
  return <div>
     <button onClick={()=>{
      setCount(count +1)
     }}> Increase</button>
     <button onClick={()=>{
      setCount(count -1)
     }}> Decrease</button>
  </div>
}
 export default App