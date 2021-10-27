import React from 'react'
import './StockOption.css'

const StockOption = ({ symbol, stockName, inputUser }) => {
  const highLithingWords = (str, i) => {
    const regex = new RegExp(inputUser, 'gi')
    const textMatch = str.match(regex)
    const strongText = textMatch ? textMatch.toString() : ''
    const normalText = str.substring(strongText.length)

    return (
      <span key={i}>
        <strong className='black'>{strongText}</strong>
        {normalText}{' '}
      </span>
    )
  }
  return (
    <div>
      <div className='stock-suggested'>
        {highLithingWords(symbol)} - {stockName.split(' ').map(highLithingWords)}
      </div>
    </div>
  )
}

export default StockOption
