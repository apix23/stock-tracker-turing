import React from 'react'
import './SuggestionPanel.css'

const SuggestionPanel = () => {
  const stocks = [
    'AAPL - Apple Inc',
    'AKS -AK Steel holding Corporation',
    ' AMD - Advanced Micro Devices Inc',
    'AMAT pplied Materials Inc',
    'AAPL - Apple Inc',
  ]

  return (
    <div className="suggestion-panel">
      <div className="market-name">Stock</div>
      {stocks.map((stock, i) => (
        <div key={i} className="stock-suggested">
          {stock}
        </div>
      ))}
    </div>
  )
}

export default SuggestionPanel
