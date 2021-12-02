import React from 'react'
import IndexLoading from './IndexLoading'
import IndexError from './IndexError'
import useFetchIndexData from '../../hooks/useFetchIndexData'
import upArrow from '../../assets/images/up-arrow.svg'
import downArrow from '../../assets/images/down-arrow.svg'
import './index.css'

const Indexes = () => {
  const token = '?token=Tpk_9f8a1a489e684df8ad8a935fab4b3504'
  const spyUrl = `https://sandbox.iexapis.com/stable/stock/SPY/quote/${token}`
  const diaUrl = `https://sandbox.iexapis.com/stable/stock/DIA/quote/${token}`
  const iwmUrl = `https://sandbox.iexapis.com/stable/stock/IWM/quote/${token}`
  const [spy, spyError] = useFetchIndexData(spyUrl)
  const [dia, diaError] = useFetchIndexData(diaUrl)
  const [iwm, iwmError] = useFetchIndexData(iwmUrl)

  if (spyError || diaError || iwmError) {
    return <IndexError />
  }

  if (!spy || !dia || !iwm) {
    return <IndexLoading />
  }

  return (
    <div className='index'>
      <div className='index-combo'>
        <div className='name'>
          <span className='index-name'>SPY</span> ${spy.indexPrice}
        </div>

        <div className={spy.indexChange > 0 ? 'positiveChange' : 'negativeChange'}>
          <img className='index-arrow' src={spy.indexChange > 0 ? upArrow : downArrow} alt='arrow' />
          <span className='index-change'>
            {spy.indexChange} | {spy.indexPercentChange}%
          </span>
        </div>
      </div>

      <div className='index-line'></div>

      <div className='index-combo'>
        <div className='name'>
          <span className='index-name'>DIA</span> ${dia.indexPrice}
        </div>

        <div className={dia.indexChange > 0 ? 'positiveChange' : 'negativeChange'}>
          <img className='index-arrow' src={dia.indexChange > 0 ? upArrow : downArrow} alt='arrow' />
          <span className='index-change'>
            {dia.indexChange} | {dia.indexPercentChange}%
          </span>
        </div>
      </div>

      <div className='index-line'></div>

      <div className='index-combo'>
        <div className='name'>
          <span className='index-name'>IWM</span> ${iwm.indexPrice}
        </div>

        <div className={iwm.indexChange > 0 ? 'positiveChange' : 'negativeChange'}>
          <img className='index-arrow' src={iwm.indexChange > 0 ? upArrow : downArrow} alt='arrow' />
          <span className='index-change'>
            {iwm.indexChange} | {iwm.indexPercentChange}%
          </span>
        </div>
      </div>
    </div>
  )
}

export default Indexes
