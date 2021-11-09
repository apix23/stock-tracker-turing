import React, { useState, useEffect } from 'react'
import SuggestionPanel from './SuggestionPanel/SuggestionPanel'
import { queryFetch, QueryMarket } from '../services/queryService'
import { QueryContext } from '../context/QueryContext'

const SearchBar = ({ style = {} }: { style: React.CSSProperties }) => {
  const [stocks, setStocks] = useState<QueryMarket[] | null>(null)
  const [stockSearch, setStockSearch] = useState('')

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

  return (
    <div className='search-wrapper' style={{ ...style }}>
      <input type='text' onChange={handleInput} placeholder='Enter a stock, symbol or currency' />
      <QueryContext.Provider value={{ stocks, stockSearch, setStockSearch }}>
        {stocks && stockSearch && <SuggestionPanel></SuggestionPanel>}
      </QueryContext.Provider>
    </div>
  )
}

export default SearchBar
