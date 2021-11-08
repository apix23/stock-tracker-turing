import React, { FC, useEffect, useState } from 'react'
import './SearchScreen.css'
import SuggestionPanel from './SuggestionPanel'
import { queryFetch, QueryMarket } from '../services/queryService'

interface SearchProps {
  setSelectedResult: (symbol: string) => void
}

const SearchScreen = ({ setSelectedResult }: SearchProps) => {
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
    <div className='search'>
      <div className='search-wrapper'>
        <input type='text' onChange={handleInput} placeholder='Enter a stock, symbol or currency' />
        {stocks && stockSearch && (
          <SuggestionPanel
            stocks={stocks}
            setSelectedResult={setSelectedResult}
            inputUser={stockSearch}
          ></SuggestionPanel>
        )}
      </div>
    </div>
  )
}

export default SearchScreen
