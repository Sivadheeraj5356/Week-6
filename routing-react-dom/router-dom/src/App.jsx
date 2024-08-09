import { useState } from 'react'
import {Suspense, lazy} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom'
import './App.css'
const Dashboard = lazy(()=>import('./components/dashboard'))
const  Landing = lazy(()=>import('./components/landing'))


function App() {
  return (
    <div>
<BrowserRouter>
<Appbar></Appbar>
<Routes>
  <Route path="/dashboard" element={<Suspense fallback={"....loading"}><Dashboard></Dashboard></Suspense>}></Route>
  <Route path="/" element={<Suspense fallback={"....loading"}><Landing></Landing></Suspense>}></Route>
</Routes>
</BrowserRouter>
    </div>
  )
}
function Appbar() {
  const navigate = useNavigate();

  return <div>
  <div style={{backgroundColor:"black", color:"white" , margin:"0px", fontFamily:"sans-serif" , display:"flex" , justifyContent:"space-between"}}>
    <h1>The Navbar of the page</h1>
     <button style={{backgroundColor:"white" , height:"40px" , marginTop:"20px" , border:"0" , borderRadius:"10px" , fontSize:"18px"}} onClick={()=>{
   navigate("/dashboard")
}}>Dashboard</button>
     <button style={{backgroundColor:"white" , height:"40px", width:"100px" , marginTop:"20px" , border:"0" , borderRadius:"10px" , fontSize:"18px" , marginRight:"600px"}} onClick={()=>{
      navigate("/")
}}>Landing</button> 
  </div>
  </div>
}

export default App
