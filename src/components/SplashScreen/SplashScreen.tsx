import React from 'react'
import ProgressBar from '../ProgressBar'
import './SplashScreen.css'
import logo from '../../assets/images/ra-logo.png'
import logoHorizontal from '../../assets/images/brand-logo-horizontal.svg'

const SplashScreen = ({ completed }: { completed: number }) => {
  return (
    <div className={completed === 100 ? 'splash-screen splash-screen-short' : 'splash-screen'}>
      {/* <img src={logo} className={completed === 100 ? '' : 'logo'} alt='deneme' /> */}

      <picture>
        <source className={completed === 100 ? '' : 'logo'} media='(max-width: 837px)' srcSet={logoHorizontal} />
        <img src={logo} className={completed === 100 ? '' : 'logo'} alt='deneme' />
      </picture>

      {completed === 100 ? null : <ProgressBar completed={completed} />}
    </div>
  )
}

export default SplashScreen
