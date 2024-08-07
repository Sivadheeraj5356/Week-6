import React, { memo, useCallback } from "react";
import { useMemo, useState } from "react"
  
function App(){
 const [count, setCount] = useState(0);
 
 const inputFunction = useCallback(()=>{
  console.log("hi there")
 },[])
 
 return (
  <div>
   <ButtonComponent inputFunction={inputFunction}></ButtonComponent>
   <button onClick={function(){
    setCount(count+1);
  }}> Counter: {count} </button>

  </div>
 )
}
const ButtonComponent = memo(({inputFunction})=>{
  console.log("re render")
  return <div>
  <button>Button clicked</button>
</div>
})
export default App