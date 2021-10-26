import React from 'react'
import './App.css'
// import { KeyStats } from './components/KeyStats/KeyStats'
import { Peers } from './components/TopPeers/TopPeers';
import SplashScreen from './components/SplashScreen'
// import Graph from './components/Graph/Graph'

function App() {
  return (
    <div className="App">
      <SplashScreen />
      {/* <KeyStats /> */}
      <Peers />
      {/* <Graph /> */}
    </div>
  )
}

export default App
