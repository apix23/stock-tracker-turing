import 'regenerator-runtime/runtime.js'
export const token = import.meta.env.VITE_API_TOKEN

export interface SummaryType {
  companyName: string
  symbol: string
  website: string
  description: string
}

export const fetchSummary = async (stockSymbol: string) => {
  const quoteUrl = `https://cloud.iexapis.com/stable/stock/${stockSymbol}/company${token}`
  try {
    const summaryData: SummaryType = await fetch(quoteUrl).then((res) => res.json())

    return summaryData
  } catch (err) {
    console.error(err)
  }
}
