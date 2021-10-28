import React from 'react'
import './SuggestionPanel.css'
import MarketOptions from './MarketOptions'

const SuggestionPanel = ({ stocks, inputUser, setSelectedResult }) => {
  return (
    <div className='suggestion-panel'>
      {stocks.length === 0 ? (
        <div className='no-result-label'>No results found</div>
      ) : (
        <MarketOptions market='Stocks' setSelectedResult={setSelectedResult} stocks={stocks} inputUser={inputUser} />
      )}
    </div>
  )
}

export default SuggestionPanel
