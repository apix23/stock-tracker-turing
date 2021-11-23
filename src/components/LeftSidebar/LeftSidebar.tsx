import React from 'react'
import "./LeftSidebar.css"
import logo from "../../assets/images/ra-logo.png";

const LeftSidebar = () => {
    return (
        <div className='splash-screen splash-screen-short left-sidebar'>
             <img src={logo} className='logo' alt='deneme' />
            
        </div>
    )
}

export default LeftSidebar
