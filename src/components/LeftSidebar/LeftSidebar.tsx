import React from 'react'
import './LeftSidebar.css'
import logo from '../../assets/images/ra-logo.png'
import { Link } from 'react-router-dom'

const LeftSidebar = () => {
  return (
    <div className='splash-screen splash-screen-short left-sidebar'>
      <Link to='/'>
        <img src={logo} className='logo' alt='deneme' />
      </Link>
    </div>
  )
}

export default LeftSidebar
