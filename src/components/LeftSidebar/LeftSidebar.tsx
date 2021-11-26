import React from 'react'
import './LeftSidebar.css'
import logo from '../../assets/images/ra-logo.png'
import { Link } from 'react-router-dom'

const LeftSidebar = () => {
  return (
    <div className='left-bar'>
      <Link to='/'>
        <img src={logo} className='left-logo' alt='deneme' />
      </Link>
    </div>
  )
}

export default LeftSidebar
