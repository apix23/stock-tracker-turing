import React from 'react'
import StockOption from './StockOption'

const MarketOptions = ({ market, stocks, inputUser }) => {
  return (
    <div>
      <div className='market-namarketme'>{}</div>
      {stocks.map((stock, i) => (
        <StockOption key={i} symbol={stock.symbol} inputUser={inputUser} stockName={stock.name} />
      ))}
    </div>
  )
}

export default MarketOptions
