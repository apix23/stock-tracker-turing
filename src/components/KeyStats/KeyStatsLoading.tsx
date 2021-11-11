import React from 'react'
import './loading.css'

const KeyStatsLoading = () => {
  return (
    <div className='key-loading'>
      <span>
        <svg fill='#27578c' width='100' height='150' data-qa='adaptive-loader__svg'>
          <rect type='secondary' height='100' width='20' x='0' order='0' speed='0.8' className='key-one'></rect>
          <rect type='secondary' height='100' width='20' x='25' order='1' speed='0.8' className='key-two'></rect>
          <rect type='secondary' height='100' width='20' x='50' order='2' speed='0.8' className='key-three'></rect>
          <rect type='secondary' height='100' width='20' x='75' order='3' speed='0.8' className='key-four'></rect>
        </svg>
      </span>
    </div>
  )
}

export default KeyStatsLoading
