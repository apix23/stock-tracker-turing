import React from 'react'
import './App.css'
import { KeyStats } from './components/KeyStats'
import SplashScreen from './components/SplashScreen'

function App() {
  return (
    <div className="App">
      <SplashScreen />
      <KeyStats />
    </div>
  )
}

export default App
