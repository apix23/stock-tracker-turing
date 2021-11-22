import React, { FC, useContext } from 'react'
import './StockOption.css'
import { SetSymbolContext } from '../../context/SetSymbolContext'
import { QueryContext } from '../../context/QueryContext'
import { Link } from 'react-router-dom'
import HighLitghtedWord from '../HighLitghtedWord'
interface StockProps {
  symbol: string
  stockName: string
  active: boolean
  position: number
}

const StockOption: FC<StockProps> = ({ symbol, stockName, active, position }) => {
  const { setSelectedResult } = useContext(SetSymbolContext)
  const { stockSearch, setStockSearch, setCursor } = useContext(QueryContext)

  const handleClick = () => {
    setSelectedResult(stockName)
    setStockSearch('')
  }

  return (
    <div>
      <Link to={`/${symbol}`} onMouseDown={(event) => event.preventDefault()}>
        <div
          onMouseEnter={() => setCursor(position)}
          className={`stock-suggested ${active && 'hovered'}`}
          onClick={handleClick}
        >
          <HighLitghtedWord word={symbol} searchToCompare={stockSearch} /> -{' '}
          {stockName.split(' ').map((word, i) => (
            <HighLitghtedWord key={i} word={word} searchToCompare={stockSearch} />
          ))}
        </div>
      </Link>
    </div>
  )
}

export default StockOption
