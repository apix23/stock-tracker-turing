import React, { useEffect, useState } from 'react'
import './Search.css'
import SuggestionPanel from './SuggestionPanel'

const Search = () => {
  const [stocks, setStocks] = useState(null)
  const [stockSearch, setStockSearch] = useState('')

  useEffect(() => {
    const URL = `https://sandbox.iexapis.com/stable/search/${stockSearch}/?token=Tpk_4171507c85734b4f824fe5b208d9c1e2`

    if (!stockSearch || stocks?.length === 0) {
      setStocks(null)
    } else {
      fetch(URL)
        .then((response) => response.json())
        .then((data) => {
          setStocks(data)
          console.log("I'm been called")
        })
        .catch((error) => {
          setStocks(error)
          console.log(error)
        })
    }
    return () => setStocks(null)
  }, [stockSearch])

  const handleInput = ({ target }) => {
    setStockSearch(target.value)
  }
  return (
    <div className="search">
      <div className="search-wrapper">
        <input type="text" onChange={handleInput} placeholder="Enter a stock, symbol or currency" />
        {stocks && stockSearch && <SuggestionPanel stocks={stocks} inputUser={stockSearch}></SuggestionPanel>}
      </div>
    </div>
  )
}

export default Search
