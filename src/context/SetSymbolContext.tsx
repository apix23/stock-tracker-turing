import { createContext } from 'react'
interface SetSymbolState {
  setSelectedResult: (symbol: string) => void
}

export const SetSymbolContext = createContext<SetSymbolState>({
  setSelectedResult: () => {},
})
