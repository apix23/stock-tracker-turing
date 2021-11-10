import React from 'react'
import './loading.css'

const LivePriceLoading = () => {
  return (
    <div className='loading'>
      <span>
        <svg fill='#27578c' width='50' height='65' data-qa='adaptive-loader__svg'>
          <rect type='secondary' height='40' width='10' x='0' order='0' speed='0.8' className='live-one'></rect>
          <rect type='secondary' height='40' width='10' x='12' order='1' speed='0.8' className='live-two'></rect>
          <rect type='secondary' height='40' width='10' x='24' order='2' speed='0.8' className='live-three'></rect>
          <rect type='secondary' height='40' width='10' x='36' order='3' speed='0.8' className='live-four'></rect>
        </svg>
      </span>
    </div>
  )
}

export default LivePriceLoading
