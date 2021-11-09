import React, { useState, useEffect } from 'react'
import './App.css'
import SplashScreen from './components/SplashScreen/SplashScreen'
import SearchScreen from './components/SearchScreen/SearchScreen'
import Dashboard from './components/Dashboard/Dashboard'
import { SetSymbolContext } from './context/SetSymbolContext'

function App() {
  const [selectedResult, setSelectedResult] = useState('')
  const [completed, setCompleted] = useState(0)

  useEffect(() => {
    if (completed < 100) {
      const intervalId = setInterval(() => {
        setCompleted((prevState) => prevState + 1)
      }, 10)
      return () => {
        clearInterval(intervalId)
      }
    }
  }, [completed])
  return (
    <div className='app'>
      <SplashScreen completed={completed} />

      <SetSymbolContext.Provider value={{ setSelectedResult }}>
        {completed === 100 && !selectedResult && <SearchScreen />}
        {selectedResult && <Dashboard setSelectedResult={setSelectedResult} symbol={selectedResult} />}
      </SetSymbolContext.Provider>
    </div>
  )
}

export default App
