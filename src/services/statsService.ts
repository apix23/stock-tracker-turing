import 'regenerator-runtime/runtime'
export const token = import.meta.env.VITE_API_TOKEN

export interface StatsType {
  high: number
  low: number
  open: number
  previousClose: number
  week52High: number
  week52Low: number
  marketCap: number
  peRatio: number
  dividendYield: number
  ttmEPS: number
  isUSMarketOpen: boolean
  volume: number
  avgTotalVolume: number
}

export const fetchStats = async (stockSymbol: string) => {
  const quoteUrl = `https://cloud.iexapis.com/stable/stock/${stockSymbol}/quote/${token}`
  const epsUrl = `https://cloud.iexapis.com/stable/stock/${stockSymbol}/stats/${token}`
  try {
    const quoteData = await fetch(quoteUrl).then((res) => res.json())
    const epsData = await fetch(epsUrl).then((res) => res.json())
    const statsData: StatsType = { ...epsData, ...quoteData }
    return statsData
  } catch (err) {
    console.error(err)
  }
}

//What data from which url?
//quoteData = open, high, low, previousClose, Day Range, 52Week Range, marketCap, peRatio, volume
//avgTotalVolume
//epsData = dividendYield, earningsPerShare
