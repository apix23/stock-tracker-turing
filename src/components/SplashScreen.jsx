import React, { useState, useEffect } from 'react'
import ProgressBar from './ProgressBar'
import './SplashScreen.css'
import logo from '../assets/images/ra-logo.png'

const SplashScreen = () => {
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
    <div className="splash-screen">
      <img src={logo} className="logo" alt="" />
      <ProgressBar completed={completed} />
    </div>
  )
}

export default SplashScreen
