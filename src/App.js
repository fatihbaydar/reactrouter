import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "./pages/Home"
import MyNavbar from "./components/MyNavbar"

const App = () => {
  return (
    <div>
   
   <BrowserRouter>
   <MyNavbar/>
   <Routes>

    <Route path='/' element={<Home/>} />
   </Routes>

   </BrowserRouter>
    </div>
  )
}

export default App