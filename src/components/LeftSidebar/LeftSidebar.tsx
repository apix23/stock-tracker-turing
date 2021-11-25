import React from 'react'
import './LeftSidebar.css'
import logo from '../../assets/images/ra-logo.png'

const LeftSidebar = () => {
  return (
    <div className='left-bar'>
      <img src={logo} className='left-logo' alt='deneme' />
    </div>
  )
}

export default LeftSidebar
