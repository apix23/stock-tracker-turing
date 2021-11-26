import React, { useState } from 'react'
import './App.css'
import Dashboard from './components/Dashboard/Dashboard'
import { Routes, Route } from 'react-router-dom'
import Homepage from './components/Homepage/Homepage'

function App() {
  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path=':stock' element={<Dashboard />} />
      </Routes>
    </div>
  )
}

export default App
