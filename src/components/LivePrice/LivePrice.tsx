import React, { useEffect, useState } from 'react'
import { realData, fetchLiveData } from '../../services/livePriceService'
import './LivePrice.css'

const LivePrice = (StockSymbol: string) => {
  const LivePriceUrl = `https://sandbox-sse.iexapis.com/stable/stocksUS1second?token=Tpk_095b8e5990924d0c8c41c2209556da53&symbols=aapl`
  const [livePrice, setLivePrice] = useState<number>()
  const [change, setChange] = useState<number>()
  const [changePercent, setChangePercent] = useState<number>()

  useEffect(() => {
    const sse = new EventSource(LivePriceUrl)

    const getRealtimeData = (data: realData[]) => {
      const liveData = data[0]
      setLivePrice(liveData.latestPrice)
      setChange(liveData.change)
      setChangePercent(liveData.changePercent)
    }

    sse.onmessage = (e) => getRealtimeData(JSON.parse(e.data))

    sse.onerror = () => {
      console.log('Error retrieving live price.')
      sse.close()
    }
  }, [])

  if (!change) {
    return <div>Loading...</div>
  }

  return (
    <div className='liveContainer'>
      <div className='livePrice'>${livePrice}</div>
      <div className={change > 0 ? 'priceChangePositive' : 'priceChangeNegative'}>
        {change > 0 ? '↑' : '↓'} {change?.toFixed(2)} | {changePercent?.toFixed(2)}%
      </div>
    </div>
  )
}

export default LivePrice
