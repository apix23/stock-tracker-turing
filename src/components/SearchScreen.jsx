import React, { useEffect, useState } from 'react'
import './SearchScreen.css'
import SuggestionPanel from './SuggestionPanel'

const Search = () => {
  const [stocks, setStocks] = useState(null)
  const [stockSearch, setStockSearch] = useState('')
  useEffect(() => {
    const URL = `https://sandbox.iexapis.com/stable/search/${stockSearch}/?token=Tpk_4171507c85734b4f824fe5b208d9c1e2`
    if (!stockSearch) {
      setStocks(null)
    } else {
      fetch(URL)
        .then((response) => response.json())
        .then((data) => {
          setStocks(data)
        })
        .catch((error) => {
          setStocks([])
          console.log(error)
        })
    }
  }, [stockSearch])

  const handleInput = ({ target }) => {
    setStockSearch(target.value)
  }
  return (
    <div className='search'>
      <div className='search-wrapper'>
        <input type='text' onChange={handleInput} placeholder='Enter a stock, symbol or currency' />
        {stocks && stockSearch && <SuggestionPanel stocks={stocks} inputUser={stockSearch}></SuggestionPanel>}
        <div className='test-a'>price</div>
      </div>
    </div>
  )
}

export default Search
