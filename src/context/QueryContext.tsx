import { createContext } from 'react'
import { QueryMarket } from '../services/queryService'

interface QueryState {
  stocks: QueryMarket[] | null
  stockSearch: string
  setStockSearch: (inputUser: string) => void
}

export const QueryContext = createContext<QueryState>({
  stocks: [],
  stockSearch: '',
  setStockSearch: () => {},
})
