import React from 'react'
import FteLoading from './FteLoading'
import FteError from './FteError'
import useFetchIndexData from '../../hooks/useFetchIndexData'
import './Fte.css'

export const token = '?token=Tpk_9f8a1a489e684df8ad8a935fab4b3504'
const spyUrl = `https://sandbox.iexapis.com/stable/stock/SPY/quote/${token}`
const diaUrl = `https://sandbox.iexapis.com/stable/stock/DIA/quote/${token}`
const iwmUrl = `https://sandbox.iexapis.com/stable/stock/IWM/quote/${token}`

const Fte = () => {
  const [spy, spyError] = useFetchIndexData(spyUrl)
  const [dia, diaError] = useFetchIndexData(diaUrl)
  const [iwm, iwmError] = useFetchIndexData(iwmUrl)

  if (spyError || diaError || iwmError) {
    return <FteError />
  }

  if (!spy || !dia || !iwm) {
    return <FteLoading />
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
