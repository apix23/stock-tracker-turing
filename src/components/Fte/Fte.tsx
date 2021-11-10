import React, { useEffect, useState } from 'react'
import { IndexTypes, fetchSpyData, fetchDiaData, fetchIwmData } from '../../services/indexService'
import './Fte.css'

const Fte = () => {
  const [spy, setSpy] = useState<IndexTypes>()
  const [dia, setDia] = useState<IndexTypes>()
  const [iwm, setIwm] = useState<IndexTypes>()

  useEffect(() => {
    fetchSpyData().then((data) => setSpy(data))
    fetchDiaData().then((data) => setDia(data))
    fetchIwmData().then((data) => setIwm(data))
  }, [])

  if (!spy || !dia || !iwm) {
    return <div>Loading...</div>
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
