import React, { useState, useEffect } from 'react'
import SearchScreen from '../SearchScreen/SearchScreen'
import SplashScreen from '../SplashScreen/SplashScreen'
import './homepage.css'

const Homepage = () => {
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
    <div className='homepage'>
      <SplashScreen completed={completed} />
      {completed === 100 && <SearchScreen />}
    </div>
  )
}

export default Homepage
