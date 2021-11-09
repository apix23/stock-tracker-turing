import React, { useEffect, useState } from 'react'
import './LivePrice.css'

interface realData {
  open: number
  change: number
  changePercent: number
}

const LivePrice = () => {
  const [livePrice, setLivePrice] = useState<number>()
  const [change, setChange] = useState<number>()
  const [changePercent, setChangePercent] = useState<number>()

  useEffect(() => {
    const sse = new EventSource(
      'https://sandbox-sse.iexapis.com/stable/stocksUS1second?token=Tpk_095b8e5990924d0c8c41c2209556da53&symbols=aapl',
    )

    const getRealtimeData = (data: realData[]) => {
      const liveData = data[0]
      setLivePrice(liveData.open)
      setChange(liveData.change)
      setChangePercent(liveData.changePercent)
    }

    sse.onmessage = (e) => getRealtimeData(JSON.parse(e.data))

    sse.onerror = () => {
      console.log('Error retrieving live price.')
      sse.close()
    }

    return () => {
      sse.close()
    }
  }, [])

  if (!change) {
    return null
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
