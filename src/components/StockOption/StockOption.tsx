import React, { FC, useContext } from 'react'
import './StockOption.css'
import { SetSymbolContext } from '../../context/SetSymbolContext'
import { QueryContext } from '../../context/QueryContext'

interface StockProps {
  symbol: string
  stockName: string
}

const StockOption: FC<StockProps> = ({ symbol, stockName }) => {
  const { setSelectedResult } = useContext(SetSymbolContext)
  const { stockSearch, setStockSearch } = useContext(QueryContext)

  const highlightMatch = (word: string, i = 0) => {
    const regex = new RegExp(stockSearch, 'gi')
    const textMatch = word.match(regex)
    const strongText = textMatch ? textMatch.toString() : ''
    const normalText = word.substring(strongText.length)

    return (
      <span key={i}>
        <strong className='black'>{strongText}</strong>
        {normalText}{' '}
      </span>
    )
  }
  const handleClick = () => {
    setSelectedResult(symbol)
    setStockSearch('')
  }
  return (
    <div>
      <div className='stock-suggested' onClick={handleClick}>
        {highlightMatch(symbol)} - {stockName.split(' ').map(highlightMatch)}
      </div>
    </div>
  )
}

export default StockOption
