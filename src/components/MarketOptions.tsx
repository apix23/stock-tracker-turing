import React from 'react'
import StockOption from './StockOption'
import { QueryMarket } from '../services/queryService'

interface MarketProps {
  market: string
  stocks: QueryMarket[]
  inputUser: string
  setSelectedResult: (symbol: string) => void
}

const MarketOptions = ({ market, stocks, inputUser, setSelectedResult }: MarketProps) => {
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
        />
      ))}
    </div>
  )
}

export default MarketOptions
