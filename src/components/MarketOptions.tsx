import React, { useContext } from 'react'
import StockOption from './StockOption/StockOption'
import { QueryContext } from '../context/QueryContext'

const MarketOptions = ({ market }: { market: string }) => {
  const { stocks } = useContext(QueryContext)
  return (
    <div>
      <div className='market-name'>{market}</div>
      {stocks?.map((stock, i) => (
        <StockOption key={i} symbol={stock.symbol} stockName={stock.name} />
      ))}
    </div>
  )
}

export default MarketOptions
