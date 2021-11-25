import React, { useContext } from 'react'
import StockOption from './StockOption/StockOption'
import { QueryContext } from '../context/QueryContext'

const MarketOptions = ({ market }: { market: string }) => {
  const { stocks, cursor } = useContext(QueryContext)

  return (
    <div>
      <div className='market-name'>{market}</div>
      {stocks?.map((stock, i) => (
        <StockOption key={i} position={i} symbol={stock.symbol} active={i === cursor} stockName={stock.name} />
      ))}
    </div>
  )
}

export default MarketOptions
