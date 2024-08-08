import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import { Dashboard } from './components/dashboard'
import { Landing } from './components/landing'

function App() {

  return (
    <div>
    <div style={{backgroundColor:"black", color:"white" , margin:"0px", fontFamily:"sans-serif" , display:"flex" , justifyContent:"space-between"}}>
    <h1>The Navbar of the page</h1>
     <button style={{backgroundColor:"white" , height:"40px" , marginTop:"20px" , border:"0" , borderRadius:"10px" , fontSize:"18px"}} onClick={()=>{
      window.location.href ='/dashboard'
     }}>Dashboard</button>
     <button style={{backgroundColor:"white" , height:"40px", width:"100px" , marginTop:"20px" , border:"0" , borderRadius:"10px" , fontSize:"18px" , marginRight:"600px"}} onClick={()=>{
      window.location.href = "/"
     }}>Landing</button> 
    </div>
<BrowserRouter>
<Routes>
  <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
  <Route path="/" element={<Landing></Landing>}></Route>
</Routes>
</BrowserRouter>
    </div>
  )
}

export default App
