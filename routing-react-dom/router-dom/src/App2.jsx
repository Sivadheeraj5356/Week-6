import { useState } from "react";
import { useContext } from "react";
import { countContext } from "./components/Context";
function App(){
   const [count, setCount] = useState(0);
   return (
    <div>
      <countContext.Provider value={{count, setCount}}>
     <Count></Count>
     </countContext.Provider>
    </div>
   )
}
function Count(){
  return <div>
    <CountRenderer></CountRenderer>
   <Buttons ></Buttons>
  </div>
}
function CountRenderer(){
  const {count,setCount} = useContext(countContext)
  return <div>
    <h2 style={{fontFamily:"sans-serif"}}>Count is <b> {count} </b></h2>
  </div>
}

function Buttons(){
  const {count,setCount} = useContext(countContext)

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