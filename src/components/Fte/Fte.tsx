import React, { useEffect, useState } from 'react'
import './Fte.css'

interface IndexTypes {
  indexPrice: number
  indexChange: number
  indexPercentChange: number
}

const Fte = () => {
  const [spy, setSpy] = useState<IndexTypes | undefined>()
  const [dia, setDia] = useState<IndexTypes | undefined>()
  const [iwm, setIwm] = useState<IndexTypes | undefined>()

  useEffect(() => {
    fetch('https://sandbox.iexapis.com/stable/stock/SPY/quote/?token=Tpk_095b8e5990924d0c8c41c2209556da53')
      .then((response) => response.json())
      .then((data) => {
        setSpy(() => ({
          indexPrice: data.latestPrice,
          indexChange: data.change.toFixed(2),
          indexPercentChange: data.changePercent.toFixed(2),
        }))
      })
  }, [])

  useEffect(() => {
    fetch('https://sandbox.iexapis.com/stable/stock/DIA/quote/?token=Tpk_095b8e5990924d0c8c41c2209556da53')
      .then((response) => response.json())
      .then((data) => {
        setDia(() => ({
          indexPrice: data.latestPrice,
          indexChange: data.change.toFixed(2),
          indexPercentChange: data.changePercent.toFixed(2),
        }))
      })
  }, [])

  useEffect(() => {
    fetch('https://sandbox.iexapis.com/stable/stock/IWM/quote/?token=Tpk_095b8e5990924d0c8c41c2209556da53')
      .then((response) => response.json())
      .then((data) => {
        setIwm(() => ({
          indexPrice: data.latestPrice,
          indexChange: data.change.toFixed(2),
          indexPercentChange: data.changePercent.toFixed(2),
        }))
      })
  }, [])

  if (!spy || !dia || !iwm) {
    return null
  }

  return (
    <div className='fte'>
      <table>
        <tbody>
          <tr>
            <td className='name'>
              <span className='index-name'>SPY</span> ${spy.indexPrice}
            </td>

            <td className={spy.indexChange > 0 ? 'positiveChange' : 'negativeChange'}>
              {spy.indexChange > 0 ? '↑' : '↓'} {spy.indexChange} | {spy.indexPercentChange}%
            </td>

            <td className='name'>
              <span className='index-name'>DIA</span> ${dia.indexPrice}
            </td>

            <td className={dia.indexChange > 0 ? 'positiveChange' : 'negativeChange'}>
              {dia.indexChange > 0 ? '↑' : '↓'} {dia.indexChange} | {dia.indexPercentChange}%
            </td>

            <td className='name'>
              <span className='index-name'>IWM</span> ${iwm.indexPrice}
            </td>

            <td className={iwm.indexChange > 0 ? 'positiveChange' : 'negativeChange'}>
              {iwm.indexChange > 0 ? '↑' : '↓'} {iwm.indexChange} | {iwm.indexPercentChange}%
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Fte
