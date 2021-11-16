import React, { useState, useEffect } from 'react'
import './App.css'
import SplashScreen from './components/SplashScreen/SplashScreen'
import SearchScreen from './components/SearchScreen/SearchScreen'
import Dashboard from './components/Dashboard/Dashboard'
import { SetSymbolContext, SymbolType } from './context/SetSymbolContext'
import { BrowserRouter as Router,
        Routes,
        Route } from "react-router-dom";


function App() {
  const [selectedResult, setSelectedResult] = useState<SymbolType>()
  const [completed, setCompleted] = useState(0)

  useEffect(() => {
    if (completed < 100) {
      const intervalId = setInterval(() => {
        setCompleted((prevState: number) => prevState + 1)
      }, 10)
      return () => {
        clearInterval(intervalId)
      }
    }
  }, [completed])
  return (
    <Router>
      <div className='app'>

        {/* <SplashScreen completed={completed} /> */}

        <SetSymbolContext.Provider value={{ setSelectedResult }}>
          <Routes>
            <Route path='/:stock' element={selectedResult && <Dashboard symbol={selectedResult.symbol} stockName={selectedResult.stockName} />} />
              {/* {selectedResult && <Dashboard symbol={selectedResult.symbol} stockName={selectedResult.stockName} />}

            </Route> */}
          
            <Route path='/' element={<SearchScreen/>}/>
              

          </Routes>
        </SetSymbolContext.Provider>
      </div>
    </Router>
  )
}

export default App
