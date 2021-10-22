import React from 'react'
import './Search.css'
import SuggestionPanel from './SuggestionPanel'

const Search = () => {
  return (
    <div className="search">
      <input type="text" placeholder="Enter a stock, symbol or currency" />
      <SuggestionPanel></SuggestionPanel>
    </div>
  )
}

export default Search
