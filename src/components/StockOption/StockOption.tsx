import React, { FC, useContext } from 'react'
import './StockOption.css'
import { QueryContext } from '../../context/QueryContext'
import { Link } from 'react-router-dom'
import HighLightedWord from '../HighLightedWord'
interface StockProps {
  symbol: string
  stockName: string
  active: boolean
  position: number
}

const StockOption: FC<StockProps> = ({ symbol, stockName, active, position }) => {
  const { stockSearch, setStockSearch, setCursor } = useContext(QueryContext)

  const handleClick = () => {
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
          <HighLightedWord word={symbol} searchToCompare={stockSearch} /> {`-\u00A0`}
          {stockName.split(' ').map((word, i) => (
            <HighLightedWord key={i} word={word} searchToCompare={stockSearch} />
          ))}
        </div>
      </Link>
    </div>
  )
}

export default StockOption
