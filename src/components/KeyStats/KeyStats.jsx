import React, { useState, useEffect } from 'react'
import './KeyStats.css'
import { fetchStats } from '../../services/statsService'
import { formatNumber } from '../../utils/formatNumber'
//
export const KeyStats = () => {
  const [stats, setStats] = useState({})

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
    incomeNetPerWabsoSplitAdjusted,
    isUSMarketOpen,
    volume,
    avgTotalVolume,
  } = stats

  useEffect(() => {
    let mounted = true

    setTimeout(() => {
      fetchStats().then((data) => {
        if (mounted) {
          setStats(data)
        }
      })
    }, 300)

    return () => {
      mounted = false
    }
  }, [])

  return (
    <div className='stats-wrapper'>
      <h2 className='stats-title'>Key Statistics</h2>
      <div className='stats-container'>
        <div className='stats-section'>
          <div className='stats-row'>
            Open
            <span>{isUSMarketOpen ? `$${open}` : '-'}</span>
          </div>
          <div className='stats-row'>
            High
            <span>{isUSMarketOpen ? `$${high}` : '-'}</span>
          </div>
          <div className='stats-row'>
            Low
            <span>{isUSMarketOpen ? `$${low}` : '-'}</span>
          </div>
          <div className='stats-row'>
            Previous Close
            <span>{`$${previousClose}`}</span>
          </div>
        </div>
        <div className='stats-section'>
          <div className='stats-row'>
            Day Range
            <span>{isUSMarketOpen ? `$${high} - ${low}` : '-'}</span>
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
            <span>{peRatio}</span>
          </div>
        </div>
        <div className='stats-section'>
          <div className='stats-row'>
            Dividend Yield
            <span>{`${dividendYield?.toFixed(2)}%`}</span>
          </div>
          <div className='stats-row'>
            Earnings Per Share
            <span>{`${incomeNetPerWabsoSplitAdjusted?.toFixed(2)}`}</span>
          </div>
          <div className='stats-row'>
            Volume
            <span>{formatNumber(volume) ?? '-'}</span>
          </div>
          <div className='stats-row'>
            Total Avg. Volume
            <span>{formatNumber(avgTotalVolume)}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
