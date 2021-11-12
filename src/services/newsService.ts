import 'regenerator-runtime/runtime.js'
const token = import.meta.env.VITE_API_TOKEN

export interface NewsData {
  headline: string
  datetime: number
  source: string
  url: string
}

export const fetchNews = async (stockSymbol: string) => {
  const newsURL = `https://cloud.iexapis.com/stable/stock/${stockSymbol}/news/last/3${token}`
  try {
    const newsData: NewsData[] = await fetch(newsURL).then((res) => res.json())
    return newsData
  } catch (err) {
    console.error(err)
  }
}
