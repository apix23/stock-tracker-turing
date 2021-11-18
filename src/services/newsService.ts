// import 'regenerator-runtime/runtime.js'
// const token = '?token=Tpk_9f8a1a489e684df8ad8a935fab4b3504'

// export interface NewsData {
//   headline: string
//   datetime: number
//   source: string
//   url: string
// }

// export const fetchNews = async (stockSymbol: string | undefined) => {
//   const newsURL = `https://sandbox.iexapis.com/stable/stock/${stockSymbol}/news/last/3${token}`
//   try {
//     const newsData: NewsData[] = await fetch(newsURL).then((res) => res.json())
//     return newsData
//   } catch (err) {
//     console.error(err)
//   }
// }
