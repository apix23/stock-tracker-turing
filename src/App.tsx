import React, { useState } from 'react'
import './App.css'
import Dashboard from './components/Dashboard/Dashboard'
import { Routes, Route } from 'react-router-dom'
import Homepage from './components/Homepage/Homepage'
import { SetSymbolContext } from './context/SetSymbolContext'

function App() {
  const [selectedResult, setSelectedResult] = useState('')
  return (
    <div className='app'>
      <SetSymbolContext.Provider value={{ setSelectedResult }}>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path=':stock' element={<Dashboard stockName={selectedResult} />} />
        </Routes>
      </SetSymbolContext.Provider>
    </div>
  )
}

export default App
