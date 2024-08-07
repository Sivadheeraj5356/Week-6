import React from "react"
function App(){
  return(
    <div>
   <CardWrapper innerComponent={<TextComponent />}></CardWrapper>
   <CardWrapper innerComponent={<TextComponent1 />}></CardWrapper>
   <CardWrapper innerComponent={<TextComponent2 />}></CardWrapper>
    </div>
  )
}
function TextComponent(){
  return <div>
    hi there
  </div>
}
function TextComponent1(){
  return <div>
    Siva Dheeraj
  </div>
}
function TextComponent2(){
  return <div>
  Harkirat Singh
  </div>
}
function CardWrapper({innerComponent}){
  return <div style={{border: "2px solid black" , padding :"10px" , margin : "10px"}}>
     {innerComponent}
  </div>
}

export default App