import React, { useState, useEffect, useRef, useContext } from 'react'
import SuggestionPanel from './SuggestionPanel/SuggestionPanel'
import { queryFetch, QueryMarket } from '../services/queryService'
import { QueryContext } from '../context/QueryContext'
import { SetSymbolContext } from '../context/SetSymbolContext'
import { useKeyPress } from '../hooks/useKeyPress'
import { useNavigate } from 'react-router-dom'

interface SearchBarProps {
  style: React.CSSProperties
  currentResult: string
}

const SearchBar = ({ style = {}, currentResult }: SearchBarProps) => {
  const [stocks, setStocks] = useState<QueryMarket[] | null>(null)
  const [stockSearch, setStockSearch] = useState('')
  const [isFocus, setIsFocus] = useState(false)
  const ref = useRef<HTMLInputElement>(null)

  const navigate = useNavigate()
  const { setSelectedResult } = useContext(SetSymbolContext)

  const downPress = useKeyPress('ArrowDown')
  const upPress = useKeyPress('ArrowUp')
  const enterPress = useKeyPress('Enter')
  const [cursor, setCursor] = useState(0)

  useEffect(() => {
    if (stocks?.length && downPress) {
      setCursor((prevState) => (prevState < stocks?.length - 1 ? prevState + 1 : prevState))
    }
  }, [downPress])

  useEffect(() => {
    if (stocks?.length && upPress) {
      setCursor((prevState) => (prevState > 0 ? prevState - 1 : prevState))
    }
  }, [upPress])

  useEffect(() => {
    if (stocks?.length && enterPress) {
      const { symbol, name } = stocks[cursor]
      setSelectedResult(name)
      navigate('../' + symbol)
    }
  }, [cursor, enterPress])

  useEffect(() => {
    ref.current?.blur()
  }, [currentResult])

  useEffect(() => {
    if (!isFocus) {
      setStockSearch('')
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
    setIsFocus(false)
  }

  return (
    <div className='search-wrapper' style={{ ...style }}>
      <input
        type='text'
        ref={ref}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleInput}
        value={isFocus ? stockSearch : currentResult}
        placeholder='Enter a stock, symbol or currency'
      />
      <QueryContext.Provider value={{ stocks, stockSearch, cursor, setCursor, setStockSearch }}>
        {stocks && stockSearch && isFocus && <SuggestionPanel></SuggestionPanel>}
      </QueryContext.Provider>
    </div>
  )
}

export default SearchBar
