import { error } from 'console'
import moduleName from 'module'

export interface QueryMarket {
  symbol: string
  name: string
}

export const token = '?token=Tpk_9f8a1a489e684df8ad8a935fab4b3504'

export const queryFetch = async (stockSearch: string) => {
  const URL = `https://sandbox.iexapis.com/stable/search/${stockSearch}/${token}`

  try {
    const response = await fetch(URL)
    const stocks: QueryMarket[] = await response.json()
    return stocks
  } catch {
    return []
  }
}
