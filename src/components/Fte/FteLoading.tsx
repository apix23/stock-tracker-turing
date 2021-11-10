import React from 'react'
import './loading.css'

const FteLoading = () => {
  return (
    <div className='fte-loading'>
      <span>
        <svg fill='#27578c' width='55' height='75' data-qa='adaptive-loader__svg'>
          <rect type='secondary' height='40' width='10' x='0' order='0' speed='0.8' className='index-one'></rect>
          <rect type='secondary' height='40' width='10' x='12' order='1' speed='0.8' className='index-two'></rect>
          <rect type='secondary' height='40' width='10' x='24' order='2' speed='0.8' className='index-three'></rect>
          <rect type='secondary' height='40' width='10' x='36' order='3' speed='0.8' className='index-four'></rect>
        </svg>
      </span>
    </div>
  )
}

export default FteLoading
