const umitToken = `?token=Tpk_9f8a1a489e684df8ad8a935fab4b3504`
const symbol = 'AAPL'
const quoteUrl = `https://sandbox.iexapis.com/stable/stock/${symbol}/company${umitToken}`

export const fetchSummary = async () => {
  try {
    const summaryData = await fetch(quoteUrl).then((res) => res.json())
    
    return summaryData
  } catch (err) {
    console.error(err)
  }
}