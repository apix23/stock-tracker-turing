import React, { useState, useEffect } from 'react'
import './App.css'
// import { KeyStats } from './components/KeyStats/KeyStats'
// import { Peers } from './components/TopPeers/TopPeers';
import SplashScreen from './components/SplashScreen'


import SearchScreen from './components/SearchScreen'

// import { News } from './components/News/News';


// import { Summary } from './components/Summary/Summary';
// import Graph from './components/Graph/Graph'
// import Fte from './components/Fte/Fte'

function App() {
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


      {completed === 100 && <SearchScreen />}

      {/* <News /> */}


      {/* <Summary /> */}
      {/* <KeyStats /> */}
      {/* <Peers /> */}
      {/* <Graph /> */}
      {/* <Fte /> */}
    </div>
  )
}

export default App
