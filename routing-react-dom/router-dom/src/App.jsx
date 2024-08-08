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
    <div style={{backgroundColor:"black", color:"white" , margin:"0px", fontFamily:"sans-serif"}}>
    <center> <h1>The Navbar of the page</h1> </center>
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
