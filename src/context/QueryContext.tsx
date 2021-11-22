import { createContext } from 'react'
import { QueryMarket } from '../services/queryService'

interface QueryState {
  stocks: QueryMarket[] | null
  stockSearch: string
  cursor: number
  setCursor: (cursor: number) => void
  setStockSearch: (inputUser: string) => void
}

export const QueryContext = createContext<QueryState>({
  stocks: [],
  stockSearch: '',
  cursor: 0,
  setCursor: () => {},
  setStockSearch: () => {},
})
