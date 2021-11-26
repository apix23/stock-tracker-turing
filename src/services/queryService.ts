import { error } from 'console'
import moduleName from 'module'
import { filterQueries } from '../utils/filterQueries'

export interface QueryMarket {
  symbol: string
  name: string
}

// export const token = '?token=Tpk_9f8a1a489e684df8ad8a935fab4b3504'

// export const queryFetch = async (stockSearch: string) => {
//   const URL = `https://sandbox.iexapis.com/stable/search/${stockSearch}/${token}`

//   try {
//     const response = await fetch(URL)

//     const stocks: QueryMarket[] = await response.json()
//     return Array.isArray(stocks) ? stocks : []
//   } catch (error) {
//     return []
//   }
// }

export const queryFetch = async (stockSearch?: string) => {
  const URL = `QueryData.json`

  try {
    const response = await fetch(URL)

    const stocks: QueryMarket[] = await response.json()
    const filteredStocks: QueryMarket[] = filterQueries(stocks, stockSearch)
    return filteredStocks
  } catch (error) {
    return []
  }
}
