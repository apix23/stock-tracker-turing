import React from 'react'
import './StockOption.css'

const StockOption = ({ symbol, stockName, inputUser }) => {
  const replacingForJsx = (str) => {
    const regex = new RegExp(inputUser, 'gi')
    const str1 = str.match(regex) ? str.match(regex).toString() : ''
    const str2 = str.substring(str1.length)

    return (
      <span>
        <strong className="black">{str1}</strong>
        {str2}{' '}
      </span>
    )
  }
  return (
    <div>
      <div className="stock-suggested">
        {replacingForJsx(symbol)} - {stockName.split(' ').map(replacingForJsx)}
      </div>
    </div>
  )
}

export default StockOption
