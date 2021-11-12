import React, { useState, useEffect } from 'react'
import './summary.css'
import { fetchSummary, SummaryType } from '../../services/summaryService'

export const Summary = ({ stockSymbol }: { stockSymbol: string }) => {
  const [summary, setSummary] = useState<SummaryType>()

  useEffect(() => {
    let mounted = true

    setTimeout(() => {
      fetchSummary(stockSymbol).then((data) => {
        if (mounted) {
          setSummary(data)
        }
      })
    }, 100)
    return () => {
      mounted = false
    }
  }, [stockSymbol])

  return (
    <div className='summary-container'>
      <h2 className='summary-title'>Company Summary</h2>
      <h3 className='company-name'>
        {summary?.companyName ?? 'Error fetching name'} ({summary?.symbol ?? 'Error fetching symbol'})
      </h3>
      <a className='company-link' href='/'>
        {summary?.website ?? 'Error fetching link'}
      </a>
      <p className='company-summary'>{summary?.description.substring(0, 500) ?? 'Description is not available'}</p>
    </div>
  )
}
