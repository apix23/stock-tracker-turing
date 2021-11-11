import { createContext } from 'react'

export interface SymbolType {
  symbol: string
  stockName: string
}

interface SetSymbolState {
  setSelectedResult: (symbol: SymbolType) => void
}

export const SetSymbolContext = createContext<SetSymbolState>({
  setSelectedResult: () => {},
})
