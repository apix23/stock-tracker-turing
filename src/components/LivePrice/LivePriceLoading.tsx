import React from 'react'
import './loading.css'

const LivePriceLoading = () => {
  return (
    <div className='live-loading'>
      <span>
        <svg fill='#27578c' width='40' height='50' data-qa='adaptive-loader__svg'>
          <rect type='secondary' height='30' width='8' x='0' order='0' speed='0.8' className='live-one'></rect>
          <rect type='secondary' height='30' width='8' x='10' order='1' speed='0.8' className='live-two'></rect>
          <rect type='secondary' height='30' width='8' x='20' order='2' speed='0.8' className='live-three'></rect>
          <rect type='secondary' height='30' width='8' x='30' order='3' speed='0.8' className='live-four'></rect>
        </svg>
      </span>
    </div>
  )
}

export default LivePriceLoading
