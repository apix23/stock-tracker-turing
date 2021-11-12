export const token = import.meta.env.VITE_API_TOKEN
const spyUrl = `https://cloud.iexapis.com/stable/stock/SPY/quote/${token}`
const diaUrl = `https://cloud.iexapis.com/stable/stock/DIA/quote/${token}`
const iwmUrl = `https://cloud.iexapis.com/stable/stock/IWM/quote/${token}`

export interface IndexTypes {
  error: boolean
  indexPrice: number
  indexChange: number
  indexPercentChange: number
}

export const fetchSpyData = async () => {
  const response = await fetch(spyUrl)
  if (!response.ok) {
    return {
      error: true,
      indexPrice: 0,
      indexChange: 0,
      indexPercentChange: 0,
    }
  }
  const data = await response.json()
  return {
    error: false,
    indexPrice: data.latestPrice.toFixed(2),
    indexChange: data.change.toFixed(2),
    indexPercentChange: data.changePercent.toFixed(2),
  }
}

export const fetchDiaData = async () => {
  const response = await fetch(diaUrl)
  if (!response.ok) {
    return {
      error: true,
      indexPrice: 0,
      indexChange: 0,
      indexPercentChange: 0,
    }
  }
  const data = await response.json()
  return {
    error: false,
    indexPrice: data.latestPrice.toFixed(2),
    indexChange: data.change.toFixed(2),
    indexPercentChange: data.changePercent.toFixed(2),
  }
}

export const fetchIwmData = async () => {
  const response = await fetch(iwmUrl)
  if (!response.ok) {
    return {
      error: true,
      indexPrice: 0,
      indexChange: 0,
      indexPercentChange: 0,
    }
  }
  const data = await response.json()
  return {
    error: false,
    indexPrice: data.latestPrice.toFixed(2),
    indexChange: data.change.toFixed(2),
    indexPercentChange: data.changePercent.toFixed(2),
  }
}
