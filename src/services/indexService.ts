export const token = '?token=Tpk_9f8a1a489e684df8ad8a935fab4b3504'
const spyUrl = `https://sandbox.iexapis.com/stable/stock/SPY/quote/${token}`
const diaUrl = `https://sandbox.iexapis.com/stable/stock/DIA/quote/${token}`
const iwmUrl = `https://sandbox.iexapis.com/stable/stock/IWM/quote/${token}`

export interface IndexTypes {
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
