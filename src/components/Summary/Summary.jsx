import React, { useState, useEffect } from 'react'
import './summary.css'
import { fetchSummary } from '../../services/summaryService';

export const Summary = () => {
const [summary, setSummary] = useState({})
useEffect(() => {
  let mounted = true;

  fetchSummary().then((data) => {
    if (mounted) {
      setSummary(data)
    }
  })
  return () => {
    mounted = false
  }
}, [])

  return (
    <div className='summary-container'>
      <h2 className='summary-title'>Company Summary</h2>
      <h3 className='company-name'>{summary?.companyName} ({summary.symbol})</h3>
      <a className='company-link' href='/'>{summary?.website}</a>
      <p className='company-summary'>{summary?.description}</p>
    </div>
  )
}
