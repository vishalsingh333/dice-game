import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home.jsx';
import Game from './Pages/Game.jsx';
import './App.css'

function App() {


  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/game' element={<Game/>} />
      </Routes>
    </div>
  )
}

export default App
