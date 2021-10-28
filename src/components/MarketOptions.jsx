import React from 'react'
import StockOption from './StockOption'

const MarketOptions = ({ market, stocks, inputUser, setSelectedResult, selectedResult }) => {
  return (
    <div>
      <div className='market-name'>{market}</div>
      {stocks.map((stock, i) => (
        <StockOption
          key={i}
          symbol={stock.symbol}
          setSelectedResult={setSelectedResult}
          inputUser={inputUser}
          stockName={stock.name}
          selectedResult={selectedResult}
        />
      ))}
    </div>
  )
}

export default MarketOptions
