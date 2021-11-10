import React from 'react'
import './loading.css'

const GraphLoading = () => {
  return (
    <div className='graph-loading'>
      <span>
        <svg fill='#27578c' width='100' height='150' data-qa='adaptive-loader__svg'>
          <rect type='secondary' height='100' width='20' x='0' order='0' speed='0.8' className='graph-one'></rect>
          <rect type='secondary' height='100' width='20' x='25' order='1' speed='0.8' className='graph-two'></rect>
          <rect type='secondary' height='100' width='20' x='50' order='2' speed='0.8' className='graph-three'></rect>
          <rect type='secondary' height='100' width='20' x='75' order='3' speed='0.8' className='graph-four'></rect>
        </svg>
      </span>
    </div>
  )
}

export default GraphLoading
