import React from 'react'
import ProgressBar from '../ProgressBar'
import './SplashScreen.css'
import logo from '../../assets/images/ra-logo.png'

const SplashScreen = ({ completed }: { completed: number }) => {
  return (
    <div className={completed === 100 ? 'splash-screen-short' : 'splash-screen'}>
      <img src={logo} className={completed === 100 ? '' : 'logo'} alt='' />

      {completed === 100 ? null : <ProgressBar completed={completed} />}
    </div>
  )
}

export default SplashScreen
