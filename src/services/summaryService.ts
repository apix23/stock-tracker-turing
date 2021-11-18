// import 'regenerator-runtime/runtime.js'
// export const token = '?token=Tpk_9f8a1a489e684df8ad8a935fab4b3504'

// export interface SummaryType {
//   companyName: string
//   symbol: string
//   website: string
//   description: string
// }

// export const fetchSummary = async (stockSymbol: string | undefined) => {
//   const quoteUrl = `https://sandbox.iexapis.com/stable/stock/${stockSymbol}/company${token}`
//   try {
//     const summaryData: SummaryType = await fetch(quoteUrl).then((res) => res.json())

//     return summaryData
//   } catch (err) {
//     console.error(err)
//   }
// }
