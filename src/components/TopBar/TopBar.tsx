import React from 'react'
import './topbar.css'
import logo from '../../assets/images/brand-logo-horizontal.svg'

const TopBar = () => {
  return (
    <div className='top-bar'>
      <img src={logo} className='top-logo' alt='deneme' />
    </div>
  )
}

export default TopBar
