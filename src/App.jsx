import React from 'react'
import './App.css'
import { KeyStats } from './components/KeyStats'
import SplashScreen from './components/SplashScreen'
// import Graph from './components/Graph/Graph'

function App() {
  return (
    <div className="App">
      <SplashScreen />
      <KeyStats />
      {/* <Graph /> */}
    </div>
  )
}

export default App
