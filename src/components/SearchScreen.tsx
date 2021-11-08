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
    //   const URL = `https://sandbox.iexapis.com/stable/search/${stockSearch}/?token=Tpk_4171507c85734b4f824fe5b208d9c1e2`
    if (!stockSearch) {
      setStocks(null)
    } else {
      queryFetch(setStocks, stockSearch)
      //     fetch(URL)
      //       .then((response) => response.json())
      //       .then((data) => {
      //         setStocks(data)
      //       })
      //       .catch((error) => {
      //         setStocks([])
      //         console.log(error)
      //       })
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
