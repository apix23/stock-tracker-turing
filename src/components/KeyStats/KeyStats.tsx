import React from 'react'
import { formatNumber } from '../../utils/formatNumber'
import KeyStatsLoading from './KeyStatsLoading'
import useFetchKeyStatsData from '../../hooks/useFetchKeyStatsData'
import KeyStatsError from './KeyStatsError'
import './KeyStats.css'

export const KeyStats = ({ stockSymbol }: { stockSymbol?: string }) => {
  const token = '?token=Tpk_9f8a1a489e684df8ad8a935fab4b3504'
  const quoteUrl = `https://sandbox.iexapis.com/stable/stock/${stockSymbol}/quote/${token}`
  const epsUrl = `https://sandbox.iexapis.com/stable/stock/${stockSymbol}/stats/${token}`

  const [stats, error] = useFetchKeyStatsData(quoteUrl, epsUrl)

  if (error) {
    return <KeyStatsError />
  }

  if (!stats) {
    return <KeyStatsLoading />
  }

  const {
    high,
    low,
    open,
    previousClose,
    week52High,
    week52Low,
    marketCap,
    peRatio,
    dividendYield,
    ttmEPS,
    volume,
    avgTotalVolume,
  } = stats

  return (
    <div className='stats-wrapper' data-testid='statistics'>
      <h2 className='stats-title'>Key Statistics</h2>
      <div className='stats-container'>
        <div className='stats-section'>
          <div className='stats-row'>
            Open
            <span>{open ? `$${open}` : '-'}</span>
          </div>
          <div className='stats-row'>
            High
            <span>{high ? `$${high}` : '-'}</span>
          </div>
          <div className='stats-row'>
            Low
            <span>{low ? `$${low}` : '-'}</span>
          </div>
          <div className='stats-row'>
            Previous Close
            <span>{`$${previousClose}`}</span>
          </div>
        </div>
        <div className='stats-section'>
          <div className='stats-row'>
            Day Range
            <span>{high ? `$${high} - ${low}` : '-'}</span>
          </div>
          <div className='stats-row'>
            52 Week Range
            <span>{`$${week52Low} - ${week52High}`}</span>
          </div>
          <div className='stats-row'>
            Market Cap
            <span>{formatNumber(marketCap) ?? '-'}</span>
          </div>
          <div className='stats-row'>
            P/E Ratio
            <span>{peRatio.toFixed(2) ?? '-'}</span>
          </div>
        </div>
        <div className='stats-section'>
          <div className='stats-row'>
            Dividend Yield
            <span>{dividendYield ? `${dividendYield?.toFixed(2)}%` : '-'}</span>
          </div>
          <div className='stats-row'>
            Earnings Per Share
            <span>{ttmEPS ? `${ttmEPS?.toFixed(2)}` : '-'}</span>
          </div>
          <div className='stats-row'>
            Volume
            <span>{volume ? formatNumber(volume) : '-'}</span>
          </div>
          <div className='stats-row'>
            Total Avg. Volume
            <span>{avgTotalVolume ? formatNumber(avgTotalVolume) : '-'}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
