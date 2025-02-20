import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Landing from './Component/Landing'
import Complaining from './Component/Complaining'
import Review from './Component/Review'

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing/>} />
        <Route path='/Complain-Request' element={<Complaining/>} />
        <Route path='/Review' element={<Review/>} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
