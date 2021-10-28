import React from 'react'
import './StockOption.css'

const StockOption = ({ symbol, stockName, inputUser, setSelectedResult }) => {
  const highlightMatch = (word, i) => {
    const regex = new RegExp(inputUser, 'gi')
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
  const handleClick = () => setSelectedResult(symbol)
  return (
    <div>
      <div className='stock-suggested' onClick={handleClick}>
        {highlightMatch(symbol)} - {stockName.split(' ').map(highlightMatch)}
      </div>
    </div>
  )
}

export default StockOption
