import React from 'react'
import SummaryError from './SummaryError'
import useFetchCompanyData from '../../hooks/useFetchCompanyData'
import './summary.css'

export const Summary = ({ stockSymbol }: { stockSymbol: string | undefined }) => {
  const token = '?token=Tpk_9f8a1a489e684df8ad8a935fab4b3504'
  const quoteUrl = `https://sandbox.iexapis.com/stable/stock/${stockSymbol}/company${token}`

  const [summary, error] = useFetchCompanyData(quoteUrl)

  if (!summary) {
    return <div>Loading</div>
  }

  if (error) {
    return <SummaryError />
  }

  return (
    <div>
      <div className='summary-container'>
        <h2 className='summary-title'>Company Summary</h2>
        <h3 className='company-name'>
          {summary.companyName} ({summary.symbol})
        </h3>
        <a className='company-link' target='_blank' rel='noreferrer' href={summary?.website}>
          {summary.website}
        </a>
        <p className='company-summary'>{summary.description.substring(0, 500)}...</p>
        <div className='summary-line'></div>
      </div>
    </div>
  )
}
