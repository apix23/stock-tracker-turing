import React, { useEffect, useState } from 'react'
import { realData } from '../../services/livePriceService'
import LivePriceLoading from './LivePriceLoading'
import LivePriceLoadingError from './LivePriceError'
import './LivePrice.css'

interface LivePriceProps {
  stockSymbol?: string
}

const LivePrice = ({ stockSymbol }: LivePriceProps) => {
  const [livePrice, setLivePrice] = useState<number>()
  const [change, setChange] = useState<number>()
  const [changePercent, setChangePercent] = useState<number>()
  const [error, setError] = useState(false)

  useEffect(() => {
    const sse = new EventSource(
      `https://sandbox-sse.iexapis.com/stable/stocksUS1second?token=Tpk_095b8e5990924d0c8c41c2209556da53&symbols=${stockSymbol}`,
    )

    const getRealtimeData = (data: realData[]) => {
      const liveData = data[0]
      setLivePrice(liveData.latestPrice)
      setChange(liveData.change)
      setChangePercent(liveData.changePercent)
    }

    sse.onmessage = (e) => {
      setError(false)
      getRealtimeData(JSON.parse(e.data))
    }

    sse.onerror = () => {
      setError(true)
      sse.close()
    }

    return () => {
      sse.close()
    }
  }, [stockSymbol])

  if (error) {
    return <LivePriceLoadingError />
  }

  if (!livePrice || !change) {
    return <LivePriceLoading />
  }

  return (
    <div className='live-container'>
      <div className='live-price'>${livePrice?.toFixed(2)}</div>
      <div className={change > 0 ? 'price-change-positive' : 'price-change-negative'}>
        {change > 0 ? '↑' : '↓'} {change?.toFixed(2)} | {changePercent?.toFixed(2)}%
      </div>
    </div>
  )
}

export default LivePrice
