import React, { useEffect, useState } from 'react'
// import { RealData } from '../../services/livePriceService'
import LivePriceLoading from './LivePriceLoading'
import LivePriceLoadingError from './LivePriceError'
import downArrow from '../../assets/images/down-arrow.svg'
import upArrow from '../../assets/images/up-arrow.svg'
import './LivePrice.css'
import { Observable } from 'rxjs'
import { filter, map, retry } from 'rxjs/operators'
interface LivePriceProps {
  stockSymbol?: string
}

function fromSSE(url: string): Observable<MessageEvent> {
  return new Observable<MessageEvent>((subscriber) => {
    const sse = new EventSource(url)
    sse.onmessage = (event) => subscriber.next(event)
    sse.onerror = (err) => subscriber.error(err)
    return () => sse.close()
  })
}

const LivePrice = ({ stockSymbol }: LivePriceProps) => {
  const [livePrice, setLivePrice] = useState<number>()
  const [change, setChange] = useState<number>()
  const [changePercent, setChangePercent] = useState<number>()
  const [error, setError] = useState(false)

  useEffect(() => {
    const token = '?token=Tpk_095b8e5990924d0c8c41c2209556da53'
    const URL = `https://sandbox-sse.iexapis.com/stable/stocksUS1second${token}&symbols=${stockSymbol}`

    fromSSE(URL)
      .pipe(
        map((message) => JSON.parse(message.data)),
        filter((data) => data && data.length > 0),
        map((data) => data[0]),
        retry(2),
      )
      .subscribe({
        next: (data) => {
          setLivePrice(data.latestPrice)
          setChange(data.change)
          setChangePercent(data.changePercent)
        },
        error: (err) => {
          console.error(err)
          setError(true)
        },
      })
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
      <img className='arrow' src={change > 0 ? upArrow : downArrow} alt='down arrow' />
      <div className={change > 0 ? 'price-change-positive' : 'price-change-negative'}>
        {change?.toFixed(2)} | {changePercent?.toFixed(2)}%
      </div>
    </div>
  )
}

export default LivePrice
