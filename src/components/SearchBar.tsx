import React, { useState, useEffect } from 'react'
import SuggestionPanel from './SuggestionPanel/SuggestionPanel'
import { queryFetch, QueryMarket } from '../services/queryService'
import { QueryContext } from '../context/QueryContext'

interface SearchBarProps {
  style: React.CSSProperties
  currentResult: string
}

const SearchBar = ({ style = {}, currentResult }: SearchBarProps) => {
  const [stocks, setStocks] = useState<QueryMarket[] | null>(null)
  const [stockSearch, setStockSearch] = useState(currentResult)
  const [isFocus, setIsFocus] = useState(false)

  useEffect(() => {
    if (isFocus) {
      setStockSearch('')
    } else {
      setStockSearch(currentResult)
    }
  }, [isFocus])

  useEffect(() => {
    if (!stockSearch) {
      setStocks(null)
    } else {
      queryFetch(setStocks, stockSearch)
    }
  }, [stockSearch])

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStockSearch(e.target.value)
  }
  const handleFocus = () => {
    setIsFocus(true)
  }
  const handleBlur = () => {
    setTimeout(() => {
      setIsFocus(false)
    }, 150)
  }

  return (
    <div className='search-wrapper' style={{ ...style }}>
      <>
        <input
          type='text'
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleInput}
          value={stockSearch}
          placeholder='Enter a stock, symbol or currency'
        />
        <QueryContext.Provider value={{ stocks, stockSearch, setStockSearch }}>
          {stocks && stockSearch && isFocus && <SuggestionPanel></SuggestionPanel>}
        </QueryContext.Provider>
      </>
    </div>
  )
}

export default SearchBar
