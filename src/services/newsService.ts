const umitToken = `?token=Tpk_9f8a1a489e684df8ad8a935fab4b3504`
const stockSymbol = 'AAPL'
const newsURL = `https://sandbox.iexapis.com/stable/stock/${stockSymbol}/news/last/3${umitToken}`

export interface NewsData {
  headline: string
  datetime: number
  source: string
}

export const fetchNews = async () => {
  try {
    const newsData: NewsData[] = await fetch(newsURL).then((res) => res.json())
    return newsData
  } catch (err) {
    console.error(err)
  }
}
