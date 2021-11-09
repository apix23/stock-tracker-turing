import React, { useContext } from 'react'
import './SuggestionPanel.css'
import MarketOptions from '../MarketOptions'
import { QueryContext } from '../../context/QueryContext'

const SuggestionPanel = () => {
  const { stocks } = useContext(QueryContext)
  return (
    <div className='suggestion-panel'>
      {stocks?.length === 0 ? (
        <div className='no-result-label'>No results found</div>
      ) : (
        <MarketOptions market='Stocks' />
      )}
    </div>
  )
}

export default SuggestionPanel
