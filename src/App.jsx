import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'
import { BrowserRouter , Route , Routes } from "react-router-dom";
import Menu from './components/Menu'
import Location from './components/Location'
import Contact from './components/Contact'

function App() {


  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home/>} ></Route>
      <Route path='menu' element={<Menu/>} ></Route>
      <Route path='location' element={<Location/>} ></Route>
      <Route path='contact' element={<Contact/>} ></Route>
      
     </Routes>
      
     </BrowserRouter>
    </>
  )
}

export default App
